class DeleteAccountPage {

    constructor(page) {
        this.page = page
        this.deletebtn = page.getByRole('link', { name: 'Delete Account' })


    }

    async goto() {
        await this.page.goto('/login')

    }

    async deleteAccount() {
        await this.deletebtn.click()
    }


}
module.exports = DeleteAccountPage
