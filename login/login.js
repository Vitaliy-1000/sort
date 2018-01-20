const { element, elements, client } = require('wd-interface');

class Login {
    constructor() {
        this.loginUrl = 'localhost:5555',
        this.inputName = element('[placeholder = "ім\'я"]'),
        this.inputPassword = element('[placeholder = "пароль"]'),
        this.buttonLogin = element('.btn.btn-primary') 
    }  

    async loginUserName(username, password) {
        await this.inputName.sendKeys(username);
        await this.inputPassword.sendKeys(password);
        await this.buttonLogin.click();
    }
};
module.exports = Login;
