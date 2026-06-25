const { test, expect } = require('@playwright/test');
const ProductReviewPage = require('../pages/productReviewSubmission');
const { faker } = require('@faker-js/faker');

test('user can submit product review', async ({ page }) => {

    const productReviewPage = new ProductReviewPage(page);

    const reviewData = {
        name: faker.person.fullName(),
        email: faker.internet.email(),
        review: faker.lorem.paragraph()
    };

    await productReviewPage.goto();

    await productReviewPage.openProduct();

    await productReviewPage.submitReview(reviewData);

    await expect(
        productReviewPage.successMessage
    ).toBeVisible();

});
