
const { test, expect } = require('@playwright/test');
const  Login  = require('../pages/Login.js');
const createdUser = require('../test-data/CreatedUser.json');


test('login with user.json credentials', async ({ page }) => {
  const loginPage = new Login(page);

  await loginPage.goto();
  await loginPage.login(createdUser.email, createdUser  .password);

  await expect(page).toHaveURL('https://automationexercise.com/');
});