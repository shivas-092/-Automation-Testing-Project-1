const { test, expect } = require('@playwright/test');
const Login = require('../pages/Login.js');
const Logindata = require('../test-data/user.json');
const CategoryPage = require('../pages/cart');
const CheckoutPage = require('../pages/checkout');

test('user can proceed to checkout', async ({ page }) => {
    const loginPage = new Login(page);

    const categoryPage = new CategoryPage(page);
    const checkoutPage = new CheckoutPage(page);
  
  
  await loginPage.goto();


const user = Logindata.Logindata;

await loginPage.login(
    user.username,
    user.password
);

    await categoryPage.selectMenCategory();

    await categoryPage.selectTshirts();

    await categoryPage.viewProduct(31);

    await categoryPage.addtoCart();

    await categoryPage.verifyCart();

    await checkoutPage.cartclick();

    // Proceed to checkout
    await checkoutPage.proceedToCheckout();

    // Verify checkout page
    await expect(page).toHaveURL(/checkout/);

    


    // Verify address details section is visible
    await expect(
        page.getByText('Address Details')
    ).toBeVisible();

    await checkoutPage.placeOrder();

    await expect(page).toHaveURL(/payment/);

});