const { test, expect } = require('@playwright/test');

test('search product api', async ({ request }) => {

    const response = await request.post(
        'https://automationexercise.com/api/searchProduct',
        {
            form: {
                search_product: 'tshirt'
            }
        }
    );

    expect(response.status()).toBe(200);

    const body = await response.json();

    // expect(body.products.length).toBeGreaterThan(0);

    const product = body.products[2];

    expect(product).toHaveProperty('id');
    expect(product).toHaveProperty('name');
    expect(product).toHaveProperty('price');

    console.log(body,product)

});