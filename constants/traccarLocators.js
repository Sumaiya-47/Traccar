// loginLocators
export const loginEmail = 'input[name="email"]';
export const loginPassword = 'input[name="password"]';
export const loginBtn = '//button[span="Login"]';
export const loggedInUserAfterLogin = '//h6[contains(.,"Gokul")]'; 

// Customer page
export const customerPage = '//div[@role="menuitem"]//span[@class="ant-menu-title-content" and text()="Customers"]';

// customerLocators
export const customerNameInput = 'input[name="customer_name"]'; 
export const customerAddBtn = '//button[contains(text(), "Add Customer")]';
// export const customerCategoryDropdown = 'div.css-1wa3eu0-placeholder'; 
// export const customerCategoryInput = '//input[@id="react-select-2-input"]'; 
// export const customerCategoryOption = (category) => `//div[contains(@class, "css-1uccc91-singleValue") and text()="${category}"]`;
// Updated selector for Customer Category dropdown
export const customerCategoryDropdown = '//div[contains(@class, "css-1hwfws3")]'; 
export const customerCategoryOption = (category) => `//div[contains(@class, "css-1uccc91-singleValue") and text()="${category}"]`;
export const customerCategoryDropdownVisibleOption = (category) => `//div[@class=" css-1uccc91-singleValue" and text()="${category}"]`;


export const customerRelationDropdown = 'div.css-1wa3eu0-placeholder'; 
export const descriptionTextarea = 'textarea[name="desc"]';
export const toggleSwitch = '.react-switch-handle'; 
export const msaReferenceInput = 'input[name="MSA_reference"]'; 