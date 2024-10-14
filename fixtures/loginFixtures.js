import { test } from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage';

test.use({
    login: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await loginPage.traccarLogin('gokul@spurtreetech.com', 'Spur2Win!!');
        await use(); 
    }
});
