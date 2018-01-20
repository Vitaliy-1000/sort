const { client, element, elements } = require('wd-interface');
const { expect } = require('chai');

const Login = require('../login/login');
const Base = require('../login/Base');
const SortTable = require('../system/sortTable');

describe('Login Page', () => {
    const base = new Base();
    const login = new Login();
    const sortTable = new SortTable();

    beforeEach(async() => {
        await base.goToLogin();
    });

    afterEach(async() => {
        await base.closeBrowser();
    });

    it('loginPage', async () => {
        expect(await base.returnCurrenUrl()).to.contains('5555');
    });

    it('go to sorted', async () => {
        await login.loginUserName('ded', 'ded');
        await sortTable.sortByPrice().lowToHIght;
        await sortTable.sortByPrice.hightToLow;
    });

});