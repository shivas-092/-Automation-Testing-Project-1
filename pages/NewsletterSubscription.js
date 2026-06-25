class Newsletterpage{

constructor(page){

this.page = page
this.newsletter = page.getByRole('textbox', { name: 'Your email address' })
this.gobtn =page.locator('i.fa.fa-arrow-circle-o-right')
}

async goto(){
    await this.page.goto('/')
}

async subscribe (data){
    await this.newsletter.fill(data.email)
}

async enter(){
    await this.gobtn.click()
}



}
module.exports = Newsletterpage