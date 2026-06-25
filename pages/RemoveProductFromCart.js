class RemoveProductPage{

    constructor(page){
        this.page =page
        this.women = page.locator("//a[normalize-space()='Women']")
        this.dress = page.locator("//div[@id='Women']//a[contains(text(),'Dress')]")
        this.cart = page.locator('a').filter({ hasText: 'Add to cart' }).first()
        this.viewcart =page.getByText('View Cart', { exact: true })
        this.remove = page.locator(`//tr[td[normalize-space()='Sleeveless Dress Women > Dress']]//i`)

    }


    async goto(){
        await this.page.goto('/')

    }

    async womenCategory(){
        await this.women.click()
    }

    async dresscategory(){
        await this.dress.click()

    }

    async addtocart(){
        await this.cart.click()
    }
    async viewCart(){  
        await this.viewcart.click()
    }
    async removeprod(){
        await this.remove.click()
    }


}
module.exports = RemoveProductPage