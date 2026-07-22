const express = require("express");

const router = express.Router();

const {
    getPlans,
    subscribe,
    getCurrentSubscription,
    getSubscriptionHistory,
    cancelSubscription
} = require("../controllers/subscription.controller");

router.get("/plans", getPlans);
router.post("/subscribe", subscribe);
router.get("/current/:userId", getCurrentSubscription);
router.get("/history/:userId", getSubscriptionHistory);
router.post("/cancel", cancelSubscription);

module.exports = router;