
const { test, expect } = require('@playwright/test');
const fs = require('fs');
const path = require('path');
const DeleteAccountPage = require('../pages/DeleteAccount');
const LoginPage = require('../pages/Login');

const USERS_FILE = path.join(__dirname, '../test-data/CreatedUser.json');

test('deleting users account', async ({ page }) => {
  // Read the current pool of created users fresh each run
  // (not via top-level require, since require caches the file
  // and won't reflect changes made by other test runs)
  const users = JSON.parse(fs.readFileSync(USERS_FILE, 'utf-8'));

  if (!Array.isArray(users) || users.length === 0) {
    throw new Error('No created users available to delete. Run signup.spec.js first.');
  }

  // Pick a random user from the pool
  const randomIndex = Math.floor(Math.random() * users.length);
  const userToDelete = users[randomIndex];

  const loginPage = new LoginPage(page);
  const deleteAccountPage = new DeleteAccountPage(page);

  // Login
  await loginPage.goto();
  await loginPage.login(userToDelete.email, userToDelete.password);

  // Delete account
  await deleteAccountPage.deleteAccount();

  // Verify account deletion
  await expect(page.getByText('Account Deleted!')).toBeVisible();

  // Remove this user from the pool so it's never picked again
  users.splice(randomIndex, 1);
  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
});











































// const { test, expect } = require('@playwright/test');
// const createdUser = require('../test-data/CreatedUser.json');
// const DeleteAccountPage = require('../pages/DeleteAccount')
// const LoginPage = require('../pages/Login');


// test('deleting users account', async({page})=>{

    
//     const loginPage = new LoginPage(page);
//     const deleteAccountPage = new DeleteAccountPage(page);

//     // Login
//     await loginPage.goto();

//     await loginPage.login(
//         createdUser.email,
//         createdUser.password
//     );

//     // Delete account
//     await deleteAccountPage.deleteAccount();

//     // Verify account deletion
//     await expect(
//         page.getByText('Account Deleted!')
//     ).toBeVisible();

// });

    

    










