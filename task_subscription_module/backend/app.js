require("dotenv").config();

const express = require("express");
const cors = require("cors");

const authRoutes = require("./src/routes/auth.routes");
const subscriptionRoutes = require("./src/routes/subscription.routes");
const stripeRoutes = require("./src/routes/stripe.routes");


const app = express();

app.use(cors());
app.use("/api/stripe", stripeRoutes);
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/subscription", subscriptionRoutes);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});