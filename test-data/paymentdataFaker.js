const { faker } = require('@faker-js/faker');

module.exports = {
    nameOnCard: faker.person.fullName(),
    cardNumber: faker.finance.creditCardNumber('################'),
    cvc: faker.finance.creditCardCVV(),
    expiryMonth: faker.number.int({ min: 1, max: 12 }).toString(),
    expiryYear: faker.number.int({ min: 2026, max: 2035 }).toString()
};