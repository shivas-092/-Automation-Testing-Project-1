import {test,expect} from '@playwright/test'
const  RemoveProductPage = require('../pages/RemoveProductFromCart.js')

test("removing product from cart", async({page})=>{
    const removeProductPage = new RemoveProductPage(page);

    await removeProductPage.goto()
    await removeProductPage.womenCategory()
    await removeProductPage.dresscategory()
    await removeProductPage.addtocart()
    await removeProductPage.viewCart()
    await removeProductPage.removeprod()

    await expect(page).toHaveURL(/view_cart/);




})