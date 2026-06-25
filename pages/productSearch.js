class ProductSearchPage{

constructor(page){

this.page = page
this.productNavigate = page.getByRole('link', { name: ' Products' })
this.searchBox = page.getByRole('textbox', { name: 'Search Product' })
this.clicksearch = page.locator('#submit_search')
}

async goto(){
    await this.page.goto('/products')

}

async productnavigate(){

    await this.productNavigate.click()
}
async searchbox(productName){
    await this.searchBox.fill('jeans')
}

async clicksearchbutton(){
    await this.clicksearch.click()  
}


}
module.exports = ProductSearchPage