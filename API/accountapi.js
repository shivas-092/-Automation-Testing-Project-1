class AccountApiPage {

    constructor(request) {
        this.request = request;
    }

    async verifyLogin(email, password) {
        return await this.request.post(
            'https://automationexercise.com/api/verifyLogin',
            {
                form: {
                    email,
                    password
                }
            }
        );
    }
}

module.exports = AccountApiPage;