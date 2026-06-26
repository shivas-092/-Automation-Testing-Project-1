# 🎭 Playwright Automation Framework (JavaScript)

A scalable end-to-end UI automation framework built using **Playwright + JavaScript** following the **Page Object Model (POM)** design pattern.

This project automates major user journeys on **Automation Exercise** and is integrated with **GitHub Actions** for Continuous Integration.

---

# 🚀 Tech Stack

* Playwright
* JavaScript (Node.js)
* Page Object Model (POM)
* Faker.js
* GitHub Actions (CI)
* HTML Reports
* Playwright Trace Viewer
* Playwright Video Recording

---

# 📁 Project Structure

```
Automation-Testing-Project
│
├── pages/
│   ├── loginPage.js
│   ├── signupPage.js
│   ├── cart.js
│   ├── checkout.js
│   ├── payment.js
│   ├── contactUs.js
│   ├── invoiceDownload.js
│   └── ...
│
├── tests/
│   ├── login.spec.js
│   ├── signup.spec.js
│   ├── checkout.spec.js
│   ├── payment.spec.js
│   ├── quantity.spec.js
│   ├── InvoiceDownload.spec.js
│   ├── contactUs.spec.js
│   └── ...
│
├── test-data/
│   ├── users.json
│   └── products.json
│
├── test-fileuploads/
│
├── playwright.config.js
│
├── package.json
│
└── README.md
```

---

# ✅ Features Covered

### Authentication

* User Signup
* User Login
* Delete Account
* Invalid Login Validation

### Product

* Search Products
* Navigate Categories
* View Product Details
* Add Product to Cart
* Remove Product from Cart

### Cart

* Quantity Update
* Verify Cart Items
* Checkout Flow

### Payment

* Complete Order
* Verify Success Message

### Invoice

* Download Invoice
* Verify Download

### Contact Us

* Submit Contact Form
* Upload File
* Handle Browser Dialog

### Newsletter

* Subscribe Successfully

---

# 🎲 Test Data

The framework supports:

* Static JSON test data
* Dynamic test data using Faker.js

Example:

```javascript
const { faker } = require('@faker-js/faker');
```

---

# ▶️ Installation

Clone the repository

```bash
git clone <repository-url>
```

Install dependencies

```bash
npm install
```

Install Playwright browsers

```bash
npx playwright install
```

---

# ▶️ Run Tests

Run all tests

```bash
npx playwright test
```

Run a specific test

```bash
npx playwright test tests/login.spec.js
```

Run in headed mode

```bash
npx playwright test --headed
```

Run with UI mode

```bash
npx playwright test --ui
```

---

# 📊 Reports

Generate HTML Report

```bash
npx playwright show-report
```

---

# 🎥 Debugging

Playwright automatically generates:

* HTML Reports
* Trace Files (on failure)
* Videos (on failure)

Open Trace Viewer

```bash
npx playwright show-trace trace.zip
```

---

# ⚙️ Continuous Integration

The framework is integrated with **GitHub Actions**.

Every push to the `main` branch:

* Installs dependencies
* Installs Playwright browsers
* Executes automation suite
* Uploads HTML Report
* Uploads Test Results
* Stores Videos and Traces for failed tests

---



# 👨‍💻 Author

**Shivasai Billa**


QA Engineer | Manual Testing | Playwright Automation | JavaScript

---

# ⭐ If you found this project useful

Please consider giving the repository a ⭐.
