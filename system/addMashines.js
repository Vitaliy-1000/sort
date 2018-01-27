const { element, elements, client } = require('wd-interface');

class AddMashines {
    constructor() {
        this.inputMakeMashine = element('[placeholder = "Марка"]'),
        this.inputWorksVolume = element('[placeholder = "Робочий о\'єм , метрів кубічних"]'),
        this.inputLengthMashine = element('[placeholder = "Довжина ,метрів"]'),
        this.inpunWidthMashine = element('[placeholder = "Ширина ,метрів"]'),
        this.inputWeightMashine = element('[placeholder = "Масса ,кг"]'),
        this.inputPowerMashine = element('[placeholder = "Потужність трактора , кВт"]'),
        this.inputPriceMashine = element('[placeholder = "Ціна"]'),

        this.buttonAddMashine = element('.btn.btn-success'),

        this.valuesAddMashines = elements('.active.brand')

    }

    async addText(text, input) {
        await input.sendKeys(text);
    }

    async checkTheAudition(text) {
        await this.price.waitForElements(1000);
        let addMashines = [];
        addMashines = await this.valuesAddMashines.map(async (element) => {
                return await element.getText()   
                });
        let trueAddMashines;
        for(let i = 0; i < addMashines.length; i++) {
            if(text != addMashines[i]){
                trueAddMashines = false;
                break;
            };
        };
        return trueAddMashines;
    };


};

module.exports =  AddMashines;