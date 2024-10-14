import { expect } from '@playwright/test';
import * as locators from '../constants/traccarLocators';

export class CustomerPage {
    constructor(page) {
        this.page = page;
        this.customerNameInput = page.locator(locators.customerNameInput);
        this.customerEmailInput = page.locator(locators.customerEmailInput);
        this.customerAddBtn = page.locator(locators.customerAddBtn);
        this.customerEditBtn = page.locator(locators.customerEditBtn);
        this.customerDeleteBtn = page.locator(locators.customerDeleteBtn);
        this.customerList = page.locator(locators.customerList);
    }

    async addCustomer(name, email) {
        await this.customerNameInput.fill(name);
        await this.customerEmailInput.fill(email);
        await this.customerAddBtn.click();
        await expect(this.customerList).toContainText(name);
    }

    async editCustomer(oldName, newName) {
        await this.page.locator(`text=${oldName}`).click();
        await this.customerEditBtn.click();
        await this.customerNameInput.fill(newName);
        await this.customerAddBtn.click();
        await expect(this.customerList).toContainText(newName);
    }

    async deleteCustomer(name) {
        await this.page.locator(`text=${name}`).click();
        await this.customerDeleteBtn.click();
        await expect(this.customerList).not.toContainText(name);
    }
}
