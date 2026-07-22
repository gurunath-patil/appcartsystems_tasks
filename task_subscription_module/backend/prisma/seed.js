const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {

    const plans = [

        {
            planName: "Free",
            description: "Perfect for beginners",
            price: 0,
            billingType: "Monthly",
            features:"Basic Dashboard,1 User,Community Support",
        },
        
        {
            planName: "Basic",
            description: "For small businesses",
            price: 499,
            billingType: "Monthly",
            features:"Dashboard,Email Support,Unlimited Projects",
            stripePriceId: "price_1Tw1ZNIErBkNeTDmHiUVfoSY"
        },
        
        {
            planName: "Basic",
            description: "For small businesses",
            price: 4999,
            billingType: "Yearly",
            features:"Dashboard,Email Support,Unlimited Projects",
            stripePriceId: "price_1Tw1ZuIErBkNeTDmwWXiMK9e"
        },
        
        {
            planName: "Premium",
            description: "For professionals",
            price: 999,
            billingType: "Monthly",
            features:"Priority Support,Analytics,Unlimited Everything",
            stripePriceId: "price_1Tw1aJIErBkNeTDmH16SCXY1"
        },
        
        {
            planName: "Premium",
            description: "For professionals",
            price: 9999,
            billingType: "Yearly",
            features:"Priority Support,Analytics,Unlimited Everything",
            stripePriceId: "price_1Tw1amIErBkNeTDm69jUeAWs"
        }

    ];

    for (const plan of plans) {

        await prisma.subscriptionPlan.create({

            data: plan

        });

    }

    console.log("Plans Added");

}

main();