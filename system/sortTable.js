const { element, elements, client } = require('wd-interface');

class SortTable {
    constructor() {
        this.systemUrl = 'http://localhost:5555/table',
        this.buttonGroup = element('.btn-group').getElements('.btn.btn-default'),
        this.price = elements('.active.price')
    }

    get sortByPrice() {
        return { 
            
            lowToHight: async () => {
                await this.buttonGroup.waitForElements(2000);
                const but = await this.buttonGroup.get(0);
                await but.click();
                },

            higthToLow: async () => {
                await this.buttonGroup.waitForElements(2000);
                const but = await this.buttonGroup.get(1);
                await but.click(); 
            }
            

        }
    }

    async textArray() {
        await this.price.waitForElements(1000);
        let textArr = [];
        textArr = await this.price.map(async (element) => {
                return await element.getText()   
                });
        await console.log(textArr);
        let varibleIndex;
        for(let i = 0;i < textArr.length; i++) {
            varibleIndex = textArr[i];
            for(let y = 1; y < textArr.length; y++){
                if ((varibleIndex < textArr[y] || varibleIndex == textArr[y])) {
                    continue;
                };
            };
        }; 
    };


};

module.exports = SortTable;