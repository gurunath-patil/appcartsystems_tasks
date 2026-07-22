const prisma = require("../config/prisma");

exports.getPlans = async (req, res) => {

    try {

        const plans = await prisma.subscriptionPlan.findMany({

            where: {

                status: "ACTIVE"

            }

        });

        res.json(plans);

    } catch (err) {

        res.status(500).json({

            message: err.message

        });

    }

};

exports.subscribe = async (req, res) => {
    try {
        const { userId, planId } = req.body;

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

        // Find active subscription
        const activeSubscription =
            await prisma.userSubscription.findFirst({
                where: {
                    userId,
                    status: "ACTIVE",
                },
            });

        // Expire previous subscription
        if (activeSubscription) {
            await prisma.userSubscription.update({
                where: {
                    id: activeSubscription.id,
                },
                data: {
                    status: "EXPIRED",
                    endDate: new Date(),
                },
            });
        }

        // Create new subscription
        const subscription =
            await prisma.userSubscription.create({
                data: {
                    userId,
                    planId,
                    billingCycle: plan.billingType,
                    status: "ACTIVE",
                    startDate: new Date(),
                },
            });

        res.json({
            message: "Subscription Successful",
            subscription,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

exports.getCurrentSubscription = async (req, res) => {
    try {
        const { userId } = req.params;

        const subscription = await prisma.userSubscription.findFirst({
            where: {
                userId: Number(userId),
                status: "ACTIVE",
            },
            include: {
                plan: true,
            },
        });

        if (!subscription) {
            return res.status(404).json({
                message: "No active subscription found",
            });
        }

        res.json(subscription);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

exports.getSubscriptionHistory = async (req, res) => {
    try {
        const { userId } = req.params;

        const history =
            await prisma.userSubscription.findMany({
                where: {
                    userId: Number(userId),
                },
                include: {
                    plan: true,
                },
                orderBy: {
                    startDate: "desc",
                },
            });

        res.json(history);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

exports.cancelSubscription = async (req, res) => {
    try {
        const { userId } = req.body;

        const subscription = await prisma.userSubscription.findFirst({
            where: {
                userId,
                status: "ACTIVE",
            },
        });

        if (!subscription) {
            return res.status(404).json({
                message: "No active subscription found",
            });
        }

        await prisma.userSubscription.update({
            where: {
                id: subscription.id,
            },
            data: {
                status: "CANCELLED",
                endDate: new Date(),
                cancelAtPeriodEnd: true,
            },
        });

        res.json({
            message: "Subscription cancelled successfully.",
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};