import Home_Locators from "../locators/home";
import Settings from "../settings/settings";

Cypress.Commands.add('fillAllFields', (User) => {
    cy.get(Home_Locators.nameInput).type(User.name, { delay: Settings.delay });
    cy.get(Home_Locators.surnameInput).type(User.surname, { delay: Settings.delay });
    cy.get(Home_Locators.emailInput).type(User.email, { delay: Settings.delay });
    cy.get(Home_Locators.phoneInput).type(User.phone, { delay: Settings.delay });
    cy.get(Home_Locators.productSelect).select(User.product);
    cy.get(Home_Locators.serviceTypeRadio(User.serviceType)).click();
    cy.get(Home_Locators.contactMeansCheckbox(User.contactMeans)).click();
    cy.get(Home_Locators.messageTextarea).type(User.message, { delay: Settings.delay });
});

Cypress.Commands.add('fillNameField', (name) => {
    cy.get(Home_Locators.nameInput).type(name, { delay: Settings.delay });
});

Cypress.Commands.add('fillSurnameField', (surname) => {
    cy.get(Home_Locators.surnameInput).type(surname, { delay: Settings.delay });
});

Cypress.Commands.add('fillEmailField', (email) => {
    cy.get(Home_Locators.emailInput).type(email, { delay: Settings.delay });
});

Cypress.Commands.add('fillPhoneField', (phone) => {
    cy.get(Home_Locators.phoneInput).type(phone, { delay: Settings.delay });
});

Cypress.Commands.add('selectProduct', (product) => {
    cy.get(Home_Locators.productSelect).select(product);
});

Cypress.Commands.add('selectServiceType', (option) => {
    cy.get(Home_Locators.serviceTypeRadio(option)).check();
});

Cypress.Commands.add('selectContactMeans', (type) => {
    cy.get(Home_Locators.contactMeansCheckbox(type)).click();
});

Cypress.Commands.add('fillMessage', (message) => {
    cy.get(Home_Locators.messageTextarea).type(message, { delay: Settings.delay });
});

Cypress.Commands.add('submitForm', () => {
    cy.get(Home_Locators.submitButton).click();
});