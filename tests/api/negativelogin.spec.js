const { test, expect } = require('@playwright/test');

test('verify invalid login', async ({ request }) => {

    const response = await request.post("https://automationexercise.com/api/verifyLogin",{
        
        form:{
  email: 'wrong@mail.com',
  password: 'admin123'
}
        
}
        )

 expect(response.status()).toBe(200);
//   const body = await response.json();
//     expect(body.message).toContain('User not found');
// console.log(body)


    })