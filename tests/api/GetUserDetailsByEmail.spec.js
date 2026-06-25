const { test, expect } = require('@playwright/test');

test('get user details by email', async ({ request }) => {

    const response = await request.get(
        'https://automationexercise.com/api/getUserDetailByEmail',
        {
            params: {
                email: 'test56@mail.com'
            }
        }
    );

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body.responseCode).toBe(200);
    expect(body.user.email).toBe('test56@mail.com');

    console.log(body,response)

});