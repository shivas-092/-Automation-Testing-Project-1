const { test, expect } = require('@playwright/test');

test('delete account api', async ({ request }) => {

    const response = await request.delete(
        'https://automationexercise.com/api/deleteAccount',
        {
            form: {
               
                email: 'Rollin.Prosacco78@gmail.com',
                password: 'Test@1234',
                
               
            }
        }
    );

    expect(response.status()).toBe(200);

    const body = await response.json();

    
    expect(body.message).toContain('Account deleted!');

    console.log(body,response)
});