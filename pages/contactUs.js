class contactUsPage{
constructor(page){
    this.page = page
    this.contactbtn = page.getByRole('link', { name: 'Contact us' })
    this.name = page.getByRole('textbox', { name: 'Name' })
    this.email= page.getByPlaceholder('Email', { exact: true })
    this.subject = page.getByRole('textbox', { name: 'Subject' })
    this.message = page.getByRole('textbox', { name: 'Your Message Here' })
    this.upload = page.locator('[name="upload_file"]')
    this.submit= page.locator('[name="submit"]')




}

async goto(){
    await this.page.goto('/login')

}

async button(){
    await this.contactbtn.click()
}
async fillContactForm(data) {
        await this.name.fill(data.name);
        await this.email.fill(data.email);
        await this.subject.fill(data.subject);
        await this.message.fill(data.message);
    }



async uploadFile(filePath) {
    await this.upload.setInputFiles('test-fileuploads\\img1.png');
}



     async clickSubmit() {
        await this.submit.click();
    }
}
module.exports = contactUsPage