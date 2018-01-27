const { client, element, elements } = require('wd-interface');
const { expect } = require('chai');

const Login = require('../login/login');
const Base = require('../login/Base');
const SortTable = require('../system/sortTable');
const AddMashines = require('../system/addMashines');

describe('Login Page', () => {
    const base = new Base();
    const login = new Login();
    const sortTable = new SortTable();
    const addMashines = new AddMashines();

    beforeEach(async() => {
        await base.goToLogin();
    });

    afterEach(async() => {
        await base.closeBrowser();
    });
/*
    it('loginPage', async () => {
        expect(await base.returnCurrenUrl()).to.contains('5555');
    });
*/
    it('go to sorted', async () => {
        await login.loginUserName('ded', 'ded');
        
        await sortTable.sortByPrice.lowToHight();
        const sortResult = await sortTable.textArraySortPrice('lowToHight');
        
        expect(sortResult).to.eql(true);

        await sortTable.sortByPrice.higthToLow();
        const sortResultH = await sortTable.textArraySortPrice('higthToLow');

        expect(sortResultH).to.eql(true);

        await addMashines.addText('SAPA-200', addMashines.inputMakeMashine);
        await addMashines.addText('19', addMashines.inputWorksVolume);
        await addMashines.addText('6.5', addMashines.inputLengthMashine);
        await addMashines.addText('2.4', addMashines.inpunWidthMashine);
        await addMashines.addText('6100', addMashines.inputWeidthMashine);
        await addMashines.addText('70', addMashines.inputPowerMashine);
        await addMashines.addText('500200', addMashines.inputPriceMashine);
        
        await addMashines.buttonAddMashine.click();

        expect(addMashines.checkTheAudition('SAPA-200')).to.eql(true);
    });

});