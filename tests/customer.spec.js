// import { test, expect } from '@playwright/test';
// import * as loginLocators from '../constants/loginLocators';
// import * as traccarLocators from '../constants/traccarLocators';

// test('Add Customer with Valid Details', async ({ page }) => {
//     await page.goto('https://traccar-qa.spurtreetech.com');
//     await page.waitForLoadState('networkidle'); 

//     await page.fill(loginLocators.loginEmail, 'gokul@spurtreetech.com');
//     await page.fill(loginLocators.loginPassword, 'Spur2Win!!');
//     await page.click(loginLocators.loginBtn);
//     await expect(page.locator(loginLocators.loggedInUserAfterLogin)).toBeVisible();

//     await page.click('//span[@class="ant-menu-title-content" and text()="Customers"]');
//     const summarySelector = '//span[@class="ant-menu-title-content" and text()="Summary"]';
//     await page.waitForSelector(summarySelector, { state: 'visible' });
//     await page.click(summarySelector);

//     //await page.click('//span[@class="ant-menu-title-content" and text()="Summary"]//a');

//     await page.waitForURL('https://traccar-qa.spurtreetech.com/customers', { timeout: 10000 });

//     await page.waitForSelector('//button[@class="ant-btn ant-btn-primary primary-btn" and span="Add Customer"]', { timeout: 10000 });
    
//     await page.click('//button[@class="ant-btn ant-btn-primary primary-btn" and span="Add Customer"]');

//     await page.fill(traccarLocators.customerNameInput, 'Summi Customer');

//     await page.click(traccarLocators.customerCategoryDropdown); 
//     await page.click(traccarLocators.customerCategoryOption('Emerging')); 

//     await page.click(traccarLocators.customerRelationDropdown);
//     await page.click('//div[contains(@class, "css-1uccc91-singleValue") and text() = "Account Managed"]'); // Adjust for the desired relation

//     await page.fill(traccarLocators.descriptionTextarea, 'A new customer is added-demo');

//     await page.click(traccarLocators.toggleSwitch); 

//     await page.click(traccarLocators.customerAddBtn);

// });



import { test, expect } from '@playwright/test';
import * as loginLocators from '../constants/loginLocators';
import * as traccarLocators from '../constants/traccarLocators';

test('Add Customer with Valid Details', async ({ page }) => {
    // Step 1: Navigate to the application and log in
    await page.goto('https://traccar-qa.spurtreetech.com');
    await page.waitForLoadState('networkidle'); 

    // Fill login credentials
    await page.fill(loginLocators.loginEmail, 'gokul@spurtreetech.com');
    await page.fill(loginLocators.loginPassword, 'Spur2Win!!');
    await page.click(loginLocators.loginBtn);

    // Assert login success
    await expect(page.locator(loginLocators.loggedInUserAfterLogin)).toBeVisible();

    // Step 2: Navigate to "Customers" section
    await page.click('//span[@class="ant-menu-title-content" and text()="Customers"]');

    // Wait for and click on "Summary"
    const summarySelector = '//span[@class="ant-menu-title-content" and text()="Summary"]';
    await page.waitForSelector(summarySelector, { state: 'visible' });
    await page.click(summarySelector);

    // Wait for URL to change to customers page
    await page.waitForURL('https://traccar-qa.spurtreetech.com/customers', { timeout: 10000 });

    // Step 3: Add new customer
    await page.waitForSelector('//button[@class="ant-btn ant-btn-primary primary-btn" and span="Add Customer"]', { timeout: 10000 });
    await page.click('//button[@class="ant-btn ant-btn-primary primary-btn" and span="Add Customer"]');

    // Fill in Customer Name
    await page.fill(traccarLocators.customerNameInput, 'Summi Customer');

    // Step 4: Select Customer Category
    // Click to open the dropdown
    await page.click(traccarLocators.customerCategoryDropdown); 

    // Wait for the options to appear
    const categoryOption = '//div[contains(@class, "css-1uccc91-singleValue") and text()="Emerging"]';
    await page.waitForSelector(categoryOption, { state: 'visible' });
    
    // Try selecting by navigating through the options (alternative method)
    await page.keyboard.press('ArrowDown'); // Navigate in the dropdown options
    await page.keyboard.press('Enter'); // Select the option

    // If not working, try directly clicking the desired option
    await page.click('//div[text()="Emerging"]'); // Ensure the option text matches

    // Step 5: Select Customer Relation
    await page.click(traccarLocators.customerRelationDropdown);

    // Wait for and select the "Account Managed" option
    const relationOption = '//div[contains(@class, "css-1uccc91-singleValue") and text()="Account Managed"]';
    await page.waitForSelector(relationOption, { state: 'visible' });
    await page.click(relationOption);

    // Step 6: Fill in Description
    await page.fill(traccarLocators.descriptionTextarea, 'A new customer is added-demo');

    // Step 7: Toggle switch (if applicable)
    await page.click(traccarLocators.toggleSwitch); 

    // Step 8: Submit the form by clicking "Add" button
    await page.click(traccarLocators.customerAddBtn);

    // Step 9: Verify that the customer was added (optional but recommended)
    await expect(page.locator('text=Summi Customer')).toBeVisible();
});
