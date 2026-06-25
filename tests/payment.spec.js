const { test, expect } = require('@playwright/test');
const Login = require('../pages/Login');
const CategoryPage = require('../pages/cart');
const CheckoutPage = require('../pages/checkout');
const PaymentPage = require('../pages/payment');
const testData = require('../test-data/user');
const paymentData = require('../test-data/paymentdataFaker');

test('user can place an order successfully', async ({ page }) => {

    // Page objects
    const loginPage = new Login(page);
    const categoryPage = new CategoryPage(page);
    const checkoutPage = new CheckoutPage(page);
    const paymentPage = new PaymentPage(page);

    // Login
    await loginPage.goto();

    await loginPage.login(
        testData.Logindata.username,
        testData.Logindata.password
    );

    // Product selection
    await categoryPage.selectMenCategory();
    await categoryPage.selectTshirts();
    await categoryPage.viewProduct(31);

    
    await categoryPage.addtoCart();

    await categoryPage.verifyCart();

    await checkoutPage.proceedToCheckout();

  
    await checkoutPage.placeOrder();

    await expect(page).toHaveURL(/payment/);

    // Payment
    await paymentPage.makePayment(
        paymentData.nameOnCard,
        paymentData.cardNumber,
        paymentData.cvc,
        paymentData.expiryMonth,
        paymentData.expiryYear
    );

    // Verify order success
    await expect(
        page.getByText('Order Placed!')
    ).toBeVisible();

});