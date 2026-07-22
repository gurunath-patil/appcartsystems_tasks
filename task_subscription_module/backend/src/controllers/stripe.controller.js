const prisma = require("../config/prisma");
const stripe = require("../config/stripe");

exports.createCheckoutSession = async (req, res) => {
  try {
    const { userId, planId } = req.body;

    // Find user
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    // Find plan
    const plan = await prisma.subscriptionPlan.findUnique({
      where: {
        id: planId,
      },
    });

    if (!plan) {
      return res.status(404).json({
        message: "Plan not found",
      });
    }

    // Free plan doesn't require Stripe
    if (plan.price === 0) {
      return res.status(400).json({
        message: "Free plan doesn't require payment.",
      });
    }

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",

      // payment_method_types: ["card"],

      customer_email: user.email,

      line_items: [
        {
          price: plan.stripePriceId,
          quantity: 1,
        },
      ],

      success_url: `${process.env.CLIENT_URL}/payment-success?session_id={CHECKOUT_SESSION_ID}`,

      cancel_url: `${process.env.CLIENT_URL}/payment-cancel`,

      metadata: {
        userId: user.id.toString(),
        planId: plan.id.toString(),
      },
    });

    res.json({
      url: session.url,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: error.message,
    });
  }
};

exports.webhook = async (req, res) => {
  const signature = req.headers["stripe-signature"];

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      req.body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (error) {
    console.error(error);

    return res.status(400).send(error.message);
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;

    // Step 2
    const userId = Number(session.metadata.userId);
    const planId = Number(session.metadata.planId);

    // Step 3
    const plan = await prisma.subscriptionPlan.findUnique({
      where: {
        id: planId,
      },
    });

    if (!plan) {
      return res.status(404).json({
        message: "Plan not found",
      });
    }

    // Step 4
    await prisma.userSubscription.updateMany({
      where: {
        userId,
        status: "ACTIVE",
      },
      data: {
        status: "CANCELLED",
        endDate: new Date(),
      },
    });

    // Step 5
    const subscription = await prisma.userSubscription.create({
      data: {
        userId: userId,
        planId: plan.id,
        status: "ACTIVE",
        billingCycle: plan.billingType,
        startDate: new Date(),
        endDate: null,
        cancelAtPeriodEnd: false,
      },
    });

    // Step 6
    await prisma.paymentHistory.create({
      data: {
        userId,
        subscriptionId: subscription.id,
        stripeSessionId: session.id,
        paymentIntent: session.payment_intent,
        amount: session.amount_total / 100,
        currency: session.currency,
        paymentStatus: "SUCCESS",
        paymentDate: new Date(),
      },
    });
  }

  res.json({
    received: true,
  });
};