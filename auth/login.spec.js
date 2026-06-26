
const { test, expect } = require('@playwright/test');
const  Login  = require('../pages/Login.js');



test('login with user.json credentials', async ({ page }) => {
  const loginPage = new Login(page);

  await loginPage.goto();
    await loginPage.login('test56@mail.com', 'admin123');
  ;

  await expect(page).toHaveURL('https://automationexercise.com/');
});