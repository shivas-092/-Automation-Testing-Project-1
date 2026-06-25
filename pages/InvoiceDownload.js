class DownloadInvoicePage {

    constructor(page) {
        this.page = page;

        this.downloadInvoiceBtn = page.getByRole(
            'link',
            { name: 'Download Invoice' }
        );

        this.continueBtn = page.getByRole(
            'link',
            { name: 'Continue' }
        );
    }

    async downloadInvoice(downloadPromise) {

        await this.downloadInvoiceBtn.click();

        const download = await downloadPromise;

        return download;
    }

    async continue() {
        await this.continueBtn.click();
    }
}

module.exports = DownloadInvoicePage;