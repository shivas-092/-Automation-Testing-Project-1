 import {test,expect} from '@playwright/test'
 const ProductSearchPage = require("../pages/productSearch.js");

 test ('user able to search for a product', async ({page})=>{
    const productSearchPage = new ProductSearchPage(page);
    await productSearchPage.goto();
    await productSearchPage.productnavigate();
    await productSearchPage.searchbox('Jeans');
    await productSearchPage.clicksearchbutton();
    await expect(page).toHaveURL('https://automationexercise.com/products?search=jeans')
 })