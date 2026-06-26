
const { test, expect } = require('@playwright/test')
const contactUsPage = require('../pages/contactUs')

const { faker } = require('@faker-js/faker');

test('contactus', async ({ page }) => {

    const contactUs1 = new contactUsPage(page)
    const contactData = {
        name: faker.person.fullName(),
        email: faker.internet.email(),
        subject: faker.lorem.words(3),
        message: faker.lorem.paragraph()
    };

    await contactUs1.goto()
    await contactUs1.button()
    await contactUs1.fillContactForm(contactData);
    await contactUs1.uploadFile('test-fileuploads/img1.png');
    await contactUs1.clickSubmit();




})