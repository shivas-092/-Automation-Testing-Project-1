class categoryPage {

    constructor(page) {

        this.page = page
      this.men = page.locator('a[href="#Men"]');
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
    await this.men.scrollIntoViewIfNeeded();
     await this.men.click();
    
}

    async selectTshirts() { 
    await this.tshirt.waitFor({ state: 'visible' });
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