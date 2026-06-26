const {test,expect} = require ('@playwright/test')


test('@smoke getbrands from api call', async({request})=>{

    const response = await request.get('https://automationexercise.com/api/brandsList')

    expect (response.status()).toBe(200)
//     const body = await response.json();

//     const brand = body.brands.find(
//         b => b.id === 4
//     );

  
// expect(brand.id).toBe(4);
// expect(brand.brand).toBe('Madame');

// console.log(brand)

})