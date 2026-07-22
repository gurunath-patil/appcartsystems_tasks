const express = require("express");

const router = express.Router();
// const expressRaw = express.raw({
//   type: "application/json",
// });

const {
  createCheckoutSession,
  webhook
} = require("../controllers/stripe.controller");

router.post("/create-checkout-session", express.json(), createCheckoutSession);
router.post("/webhook", express.raw({ type: "application/json" }),webhook);

module.exports = router;