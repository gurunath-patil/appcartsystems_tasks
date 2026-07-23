# Express.js Backend with Prisma & Stripe

A robust Node.js backend built with Express.js, Prisma ORM, SQLite, and Stripe integration for payments and webhooks.

---

## 🛠 Tech Stack

* **Runtime & Framework:** Node.js, Express.js
* **Database & ORM:** SQLite, Prisma ORM
* **Payments:** Stripe API & Webhooks

---

## 🚀 Getting Started

Follow these instructions to get a local copy of the project up and running.

### 📋 Prerequisites

* **npm**
* **Stripe CLI** (required for testing webhooks locally)

---

## ⚙️ Environment Configuration

> ⚠️ **Important:** A sample environment file (`env_sample`) is provided in the repository. Before running the application, create a `.env` file in the root directory and replace the placeholder secret keys (such as your Stripe API keys and WebHook Key) with your actual secrets.

* Run Database Migrations: npx prisma migrate dev --name init
* Start Stripe Webhook Forwarding: npm run stripeWebhook
* Start the Development Server: npm run dev
