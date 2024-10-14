import { expect } from "@playwright/test";
import * as locators from '../constants/traccarLocators';

export class LoginPage {
    constructor(page) {
        this.page = page;
        this.loginEmail = page.locator(locators.loginEmail);
        this.loginPassword = page.locator(locators.loginPassword);
        this.loginBtn = page.locator(locators.loginBtn);
        this.loggedInUserAfterLogin = page.locator(locators.loggedInUserAfterLogin);
    }

    async traccarLogin() {
        await this.page.goto('https://traccar-qa.spurtreetech.com/');
        await this.loginEmail.fill('gokul@spurtreetech.com');
        await this.loginPassword.fill('Spur2Win!!');
        await this.loginBtn.click();
        await expect(this.loggedInUserAfterLogin).toBeVisible();
    }
}
