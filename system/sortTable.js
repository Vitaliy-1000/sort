const { element, elements, client } = require('wd-interface');

class SortTable {
    constructor() {
        this.systemUrl = 'http://localhost:5555/table',
        this.buttonGroup = element('.btn-group').getElements('.btn.btn-default')
    }

    sortByPrice() {
        return {
            lowToHIght: async () => this.buttonGroup.get(0).click(),
            hightToLow: async () => this.buttonGroup.get(1).click()
        }
    }
};

module.exports = SortTable;