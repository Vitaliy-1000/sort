const { elements, element, client } = require('wd-interface');

class Base {
    constructor() {
        this.browser = client().chrome();
    }

    async goToLogin() {
        await this.browser.goTo('localhost:5555');
    }

    async closeBrowser() {
        await this.browser.closeBrowser();
    }
    
    async returnCurrenUrl() {
        return await this.browser.getUrl();
    }

};

module.exports = Base;
