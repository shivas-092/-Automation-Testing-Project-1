const { test, expect } = require('@playwright/test');
const ProductApiPage = require('../../API/productapi');


test('GET response for products page', async ({ request }) => {
    const productApi = new ProductApiPage(request);
const response = await productApi.getProducts();
   

    expect(response.status()).toBe(200)

//   const body = await response.json();

//     const product = body.products.find(
//         p => p.id === 2
//     );

//     expect(product.id).toBe(2);
//     expect(product.name).toBe('Men Tshirt');
//     expect(product.brand).toBe('H&M');











})