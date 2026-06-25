const { test, expect } = require('@playwright/test');

test('update account api', async ({ request }) => {

    const response = await request.put(
        'https://automationexercise.com/api/updateAccount',
        {
            form: {
                name: 'Updated User',
                email: 'test56@mail.com',
                password: 'admin123',
                title: 'Mr',
                birth_date: '15',
                birth_month: 'May',
                birth_year: '1995',
                firstname: 'Updated',
                lastname: 'User',
                company: 'Updated Company',
                address1: 'Updated Address',
                address2: 'Near Park',
                country: 'United States',
                zipcode: '90001',
                state: 'California',
                city: 'Los Angeles',
                mobile_number: '9999999999'
            }
        }
    );

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body.responseCode).toBe(200);
    expect(body.message).toContain('User updated');

    console.log(body,response)
});