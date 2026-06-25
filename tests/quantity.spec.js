const { test, expect } = require('@playwright/test');
const CategoryPage = require('../pages/cart.js');

test('user can add product with quantity 4', async ({ page }) => {

    const categoryPage = new CategoryPage(page);

    await categoryPage.goto();
    await categoryPage.selectMenCategory();
    await categoryPage.selectTshirts();
    await categoryPage.viewProduct(31);

    await expect(page).toHaveURL(
        'https://automationexercise.com/product_details/31'
    );

    // New step
    await categoryPage.increaseQuantity(4);

    // await categoryPage.addtoCart();
    

    // await expect(page).toHaveURL(
    //     'https://automationexercise.com/view_cart'
    // );

    await expect(page.locator('#quantity')).toHaveValue('4');

});