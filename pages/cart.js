class categoryPage {

    constructor(page) {

        this.page = page
        this.men = page.locator("body > section:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > h4:nth-child(1) > a:nth-child(1) > span:nth-child(1) > i:nth-child(1)")
        this.tshirt = page.getByRole('link', { name: 'Tshirts' })
        this.cart = page.getByRole('button', { name: 'Add to cart' })
        this.continueShop = page.getByRole('button', { name: 'Continue Shopping' })
        this.verifyingCart = page.getByRole('link', { name: 'Cart' })
        this.quantity = page.locator('#quantity');

    }

    async goto() {
        await this.page.goto('https://automationexercise.com/')
    }
   async selectMenCategory() {
    await this.men.waitFor({ state: 'visible' });
    await this.men.click();
}

    async selectTshirts() {
        await this.tshirt.click();
    }
    async viewProduct(productId) {
        await this.page
            .locator(`a[href='/product_details/${productId}']`)
            .click();
    }


    async addtoCart() {
        await this.cart.click();
    }
    async continueShopping() {
        await this.continueShop.click();
    }   

     async verifyCart() {
        await this.verifyingCart.click();
    }    

    async increaseQuantity(times) {
    for (let i = 1; i < times; i++) {
        await this.quantity.press('ArrowUp');
    }
}





}
module.exports = categoryPage;