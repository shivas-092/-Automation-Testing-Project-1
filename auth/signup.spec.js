
// const { test, expect } = require('@playwright/test');
// const SignupPage = require('../pages/signup.js');     
// const { signupData } = require('../test-data/user.json');  
// const { faker } = require('@faker-js/faker');  
// const fs = require('fs');

// test('user can signup with valid credentials', async ({ page }) => {
//   const signupPage = new SignupPage(page);
//  const randomName = faker.person.fullName();
//   const randomEmail = faker.internet.email();

//    const finalSignupData = {
//     ...signupData,           
//     name: randomName,        
//     email: randomEmail,      
//   };

//   fs.writeFileSync(
//     './test-data/CreatedUser.json',
//     JSON.stringify(finalSignupData, null, 2)
//   );

//   await signupPage.goto();
//   await signupPage.signup(finalSignupData.name, finalSignupData.email);
//   await signupPage.fillform(finalSignupData);
//   await signupPage.createAccount();

//   await expect(page.getByText('Account Created!')).toBeVisible();
// });




const { test, expect } = require('@playwright/test');
const SignupPage = require('../pages/signup.js');
const { signupData } = require('../test-data/user.json');
const { faker } = require('@faker-js/faker');
const fs = require('fs');
const path = require('path');

const USERS_FILE = path.join(__dirname, '../test-data/CreatedUser.json');
const NUMBER_OF_USERS = 10;

for (let i = 0; i < NUMBER_OF_USERS; i++) {
  test(`signup user #${i + 1}`, async ({ page }) => {
    const signupPage = new SignupPage(page);

    const finalSignupData = {
      ...signupData,
      name: faker.person.fullName(),
      email: faker.internet.email(),
    };

    await signupPage.goto();
    await signupPage.signup(finalSignupData.name, finalSignupData.email);
    await signupPage.fillform(finalSignupData);
    await signupPage.createAccount();

    await expect(page.getByText('Account Created!')).toBeVisible();

    let users = [];
    if (fs.existsSync(USERS_FILE)) {
      const content = fs.readFileSync(USERS_FILE, 'utf-8');
      users = content.trim() ? JSON.parse(content) : [];
    }
    users.push(finalSignupData);
    fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
  });
}














































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

