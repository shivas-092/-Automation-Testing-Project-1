const { test, expect } = require('@playwright/test');

const LoginPage = require('../pages/Login');
const CategoryPage = require('../pages/cart');
const CheckoutPage = require('../pages/checkout');
const PaymentPage = require('../pages/payment');
const DownloadInvoicePage = require('../pages/InvoiceDownload');

const createdUser = require('../test-data/CreatedUser.json');
const paymentData = require('../test-data/paymentdataFaker');

test('user can download invoice after purchase', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const categoryPage = new CategoryPage(page);
    const checkoutPage = new CheckoutPage(page);
    const paymentPage = new PaymentPage(page);
    const downloadInvoicePage = new DownloadInvoicePage(page);


    await loginPage.goto();

    await loginPage.login('test56@mail.com', 'admin123');


    await categoryPage.selectMenCategory();
    await categoryPage.selectTshirts();
    await categoryPage.viewProduct(31);
    await categoryPage.addtoCart();


    await categoryPage.verifyCart();
    await checkoutPage.cartclick();
    await checkoutPage.proceedToCheckout();
    await checkoutPage.placeOrder();


    await paymentPage.makePayment(
        paymentData.nameOnCard,
        paymentData.cardNumber,
        paymentData.cvc,
        paymentData.expiryMonth,
        paymentData.expiryYear
    );

    // Download Invoice
    const downloadPromise =
        page.waitForEvent('download');

    const download =
        await downloadInvoicePage.downloadInvoice(
            downloadPromise
        );

    expect(download.suggestedFilename())
        .toContain('.txt');

});