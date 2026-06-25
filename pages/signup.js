

class SignupPage {
  constructor(page) {
    this.page = page;
    this.name = page.getByRole('textbox', { name: 'Name' });
    this.email = page.locator("//input[@data-qa='signup-email']");
    this.signupButton = page.getByRole('button', { name: 'Signup' });
    this.radioButton = page.getByRole('radio', { name: 'Mr.' });
    this.password = page.getByRole('textbox', { name: 'Password *' });
    this.day = page.locator('#days');
    this.month = page.locator('#months');
    this.year = page.locator('#years');
    this.newsletter = page.getByLabel('Sign up for our newsletter!');
    this.specialOffers = page.getByRole('checkbox', { name: 'Receive special offers from our partners!' });
    this.firstName = page.getByRole('textbox', { name: 'First name *' });
    this.lastName = page.getByRole('textbox', { name: 'Last name *' });
    this.company = page.locator('#company');
    this.address = page.getByRole('textbox', { name: 'Address * (Street address, P.O. Box, Company name, etc.)' });
    this.country = page.getByRole('combobox', { name: 'Country *' });
    this.state = page.getByRole('textbox', { name: 'State *' });
    this.city = page.getByRole('textbox', { name: 'City *' });
    this.zipcode = page.locator('#zipcode');
    this.mobileNumber = page.getByRole('textbox', { name: 'Mobile Number *' });
    this.createAccButton = page.getByRole('button', { name: 'Create Account' });
  }

  async goto() {
    await this.page.goto('/login');
  }

  async signup(name, email) {
    await this.name.fill(name);
    await this.email.fill(email);
    await this.signupButton.click();
  }

  async fillform(data) {
    await this.radioButton.check();
    await this.password.fill(data.password);
    await this.day.selectOption(data.day);
    await this.month.selectOption(data.month);
    await this.year.selectOption(data.year);
    await this.newsletter.check();
    await this.specialOffers.check();
    await this.firstName.fill(data.firstName);
    await this.lastName.fill(data.lastName);
    await this.company.fill(data.company);
    await this.address.fill(data.address);
    await this.country.selectOption(data.country);
    await this.state.fill(data.state);
    await this.city.fill(data.city);
    await this.zipcode.fill(data.zipcode);
    await this.mobileNumber.fill(data.mobileNumber);
  }

  async createAccount() {
    await this.createAccButton.click();
  }
}

module.exports = SignupPage;





















































