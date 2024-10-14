import { test, expect } from '@playwright/test';
import * as loginLocators from '../constants/loginLocators';
import * as traccarLocators from '../constants/traccarLocators';

test('Add Customer with Valid Details', async ({ page }) => {
    await page.goto('https://traccar-qa.spurtreetech.com');
    await page.waitForLoadState('networkidle'); 

    await page.fill(loginLocators.loginEmail, 'gokul@spurtreetech.com');
    await page.fill(loginLocators.loginPassword, 'Spur2Win!!');
    await page.click(loginLocators.loginBtn);
    await expect(page.locator(loginLocators.loggedInUserAfterLogin)).toBeVisible();

    await page.click('//span[@class="ant-menu-title-content" and text()="Customers"]');
    const summarySelector = '//span[@class="ant-menu-title-content" and text()="Summary"]';
    await page.waitForSelector(summarySelector, { state: 'visible' });
    await page.click(summarySelector);

    //await page.click('//span[@class="ant-menu-title-content" and text()="Summary"]//a');

    await page.waitForURL('https://traccar-qa.spurtreetech.com/customers', { timeout: 10000 });

    await page.waitForSelector('//button[@class="ant-btn ant-btn-primary primary-btn" and span="Add Customer"]', { timeout: 10000 });
    
    await page.click('//button[@class="ant-btn ant-btn-primary primary-btn" and span="Add Customer"]');

    await page.fill(traccarLocators.customerNameInput, 'Summi Customer');

    await page.click(traccarLocators.customerCategoryDropdown); 
    await page.click(traccarLocators.customerCategoryOption('Emerging')); 

    await page.click(traccarLocators.customerRelationDropdown);
    await page.click('//div[contains(@class, "css-1uccc91-singleValue") and text() = "Account Managed"]'); // Adjust for the desired relation

    await page.fill(traccarLocators.descriptionTextarea, 'A new customer is added-demo');

    await page.click(traccarLocators.toggleSwitch); 

    await page.click(traccarLocators.customerAddBtn);

});
