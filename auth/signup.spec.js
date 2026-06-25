
const { test, expect } = require('@playwright/test');
const SignupPage = require('../pages/signup.js');     
const { signupData } = require('../test-data/user.json');  
const { faker } = require('@faker-js/faker');  
const fs = require('fs');

test('user can signup with valid credentials', async ({ page }) => {
  const signupPage = new SignupPage(page);
 const randomName = faker.person.fullName();
  const randomEmail = faker.internet.email();

   const finalSignupData = {
    ...signupData,           
    name: randomName,        
    email: randomEmail,      
  };

  fs.writeFileSync(
    './test-data/createdUser.json',
    JSON.stringify(finalSignupData, null, 2)
  );

  await signupPage.goto();
  await signupPage.signup(finalSignupData.name, finalSignupData.email);
  await signupPage.fillform(finalSignupData);
  await signupPage.createAccount();

  await expect(page.getByText('Account Created!')).toBeVisible();
});



















































// const { test, expect } = require('@playwright/test');
// const signup = require('../auth/signup.js')
// const { signupData } = require('../test data/user.json');
// const uniqueEmail = `johndoe${Date.now()}@mail.com`;
// const signupData1 = { ...signupData, email: uniqueEmail };
// test('user can signup with valid credentials', async ({ page }) => {
// await signupPage.goto();
// await signupPage.signup(signupData1.name, signupData1.email);
// await signupPage.fillform(signupData1.password, signupData1.day, signupData1.month, signupData1.year, signupData1.firstName, signupData1.lastName, signupData1.company1, signupData1.address, signupData1.country, signupData1.state, signupData1.city, signupData1.zipcode, signupData1.mobileNumber);
// await signupPage.createAccount();

// //await expect(page.getByText('Account Created!')).toBeVisible();
// })





// // test('user can signup with valid credentials',async({page})=>{
// //     await signup.signup(signupdata.name,signupdata.email);
// //     await expect(page).toHaveURL('https://automationexercise.com/signup');
// // })   

// // test('user can signup with invalid credentials',async({page})=>{
// //     await signup.signup(signupdata.invalidname,signupdata.invalidemail);
// //     await expect(page).toHaveURL('https://automationexercise.com/signup');
// // })

