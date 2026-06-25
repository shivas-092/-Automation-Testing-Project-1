const { faker } = require('@faker-js/faker');

class PaymentPage {
    constructor(page) {
        this.page = page;
        this.nameOnCard = page.locator('[name="name_on_card"]')
        this.cardNumber = page.locator("//input[@name='card_number']")
        this.cvc = page.locator('[name="cvc"]')
        this.expMonth = page.locator('[name="expiry_month"]')
        this.expYear =page.locator('[name="expiry_year"]')
        this.payBtn =page.locator('button:has-text("Pay and Confirm Order")')
    }

    async goto() {
        await this.page.goto('/checkout');
    }

    async makePayment(name, number, cvc, month, year) {
        await this.nameOnCard.fill(name);
        await this.cardNumber.fill(number);
        await this.cvc.fill(cvc);
        await this.expMonth.fill(month);
        await this.expYear.fill(year);
        await this.payBtn.click();
    }
}

module.exports = PaymentPage;