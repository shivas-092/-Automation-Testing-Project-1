const { test, expect } = require('@playwright/test');
const  Newsletterpage = require('../pages/NewsletterSubscription');
const { faker } = require('@faker-js/faker');



test('user can subscribe the newsletter', async ({ page }) => {


 const newsletterpage = new Newsletterpage(page);

  const reviewData = {
       
        email: faker.internet.email(),
       
    };

    await newsletterpage.goto()
    await newsletterpage.subscribe(reviewData)
    await newsletterpage.enter()






})