const { test, expect } = require('@playwright/test');
const { faker } = require('@faker-js/faker');

test('create account api', async ({ request }) => {

    const response = await request.post(
        'https://automationexercise.com/api/createAccount',
        {
            form: {
                name: faker.person.fullName(),
                email: faker.internet.email(),
                password: 'Test@123',
                title: 'Mr',
                birth_date: '15',
                birth_month: 'May',
                birth_year: '1995',
                firstname: 'John',
                lastname: 'Doe',
                company: 'QA Solutions',
                address1: '221B Baker Street',
                address2: 'Near Park',
                country: 'United States',
                zipcode: '90001',
                state: 'California',
                city: 'Los Angeles',
                mobile_number: '9876543210'
            }
        }
    );

    expect(response.status()).toBe(200);

    const body = await response.json();

    console.log(body)

});