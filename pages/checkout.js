class CheckoutPage {
    constructor(page) {
        this.page = page;

        this.cartclicking = page.getByRole('link', { name: 'Cart' })
        this.proceedToCheckoutBtn = page.getByText('Proceed To Checkout');
        this.placeOrderBtn = page.getByRole('link', { name: 'Place Order' });
    }


    async cartclick(){
        await this.cartclicking.click();
    }

    async proceedToCheckout() {
        await this.proceedToCheckoutBtn.click();
    }

    async placeOrder() {
        await this.placeOrderBtn.click();
    }
}

module.exports = CheckoutPage;