class ProductReviewPage {
    constructor(page) {
        this.page = page;

        this.productsLink = page.getByRole('link', { name: 'Products' });
        this.viewProduct = page.locator('a[href="/product_details/1"]').first();

        this.name = page.getByRole('textbox', { name: 'Your Name' });
        this.Email =page.locator('#email');
        this.review = page.getByRole('textbox', { name: 'Add Review Here!' });

        this.submitBtn = page.getByRole('button', { name: 'Submit' });

        this.successMessage = page.getByText(
            'Thank you for your review.'
        );
    }

    async goto() {
        await this.page.goto('/');
    }

    async openProduct() {
        await this.productsLink.click();
        await this.viewProduct.click();
    }

    async submitReview(data) {
        await this.name.fill(data.name);
        await this.Email.fill(data.email);
        await this.review.fill(data.review);
        await this.submitBtn.click();
    }
}

module.exports = ProductReviewPage;