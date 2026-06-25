class Login {

    constructor(page) {

        this.page = page
        this.emailInput = page.locator("//input[@data-qa='login-email']")
        this.passwordInput = page.getByRole('textbox', { name: 'Password' })
        this.btn = page.locator("//button[normalize-space()='Login']")
    }

    async goto() {
        await this.page.goto('https://automationexercise.com/login')
    }
    async login(username, password) {
        await this.emailInput.fill(username);
        await this.passwordInput.fill(password);
        await this.btn.click();
    }

}

module.exports = Login;