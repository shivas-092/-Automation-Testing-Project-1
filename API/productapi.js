class ProductApiPage {

    constructor(request) {
        this.request = request;
    }

    async getProducts() {
        return await this.request.get(
            'https://automationexercise.com/api/productsList'
        );
    }

    async getBrands() {
        return await this.request.get(
            'https://automationexercise.com/api/brandsList'
        );
    }
}

module.exports = ProductApiPage;