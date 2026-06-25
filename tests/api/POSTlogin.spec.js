const { test, expect } = require('@playwright/test');
const AccountApiPage = require('../../API/AccountApi');

test('@regression verify post login api', async ({ request }) => {

  const accountApi = new AccountApiPage(request);

const response = await accountApi.verifyLogin({

   
        
        form:{
  email: 'test@mail.com',
  password: 'admin123'
}
        
}
        )

 expect(response.status()).toBe(200);
  const body = await response.json();
console.log(body)



})