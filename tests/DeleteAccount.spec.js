const { test, expect } = require('@playwright/test');
const createdUser = require('../test-data/CreatedUser.json');
const DeleteAccountPage = require('../pages/DeleteAccount')
const LoginPage = require('../pages/Login');


test('deleting users account', async({page})=>{

    
    const loginPage = new LoginPage(page);
    const deleteAccountPage = new DeleteAccountPage(page);

    // Login
    await loginPage.goto();

    await loginPage.login(
        createdUser.email,
        createdUser.password
    );

    // Delete account
    await deleteAccountPage.deleteAccount();

    // Verify account deletion
    await expect(
        page.getByText('Account Deleted!')
    ).toBeVisible();

});

    

    










