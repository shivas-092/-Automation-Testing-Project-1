const { test, expect } = require('@playwright/test');
const CategoryPage = require('../pages/cart.js');

test('user can navigate Men > Tshirts, open a product and add it to cart', async ({ page }) => {
  const categoryPage = new CategoryPage(page);
await categoryPage.goto();
await categoryPage.selectMenCategory();
await categoryPage.selectTshirts();
await categoryPage.viewProduct(31);
await expect(page).toHaveURL('https://automationexercise.com/product_details/31');
await categoryPage.addtoCart();
await categoryPage.continueShopping()
await categoryPage.verifyCart();
await expect(page).toHaveURL('https://automationexercise.com/view_cart');
  
});