import Home_Locators from "../locators/home";
import Settings from "../settings/settings";

class serviceForms {
    fillFullRequiredFields(name, surname, email, phone, product, serviceType, contactMeans, message) {
        this.fillNameField(name);
        this.fillSurnameField(surname);
        this.fillEmailField(email);
        this.fillPhoneField(phone);
        this.selectProduct(product);
        this.selectServiceType(serviceType);
        this.selectContactMeans(contactMeans);
        this.fillMessage(message);
    }

    fillNameField(name) {
        cy.get(Home_Locators.nameInput).type(name, { delay: Settings.delay });
    }

    fillSurnameField(surname) {
        cy.get(Home_Locators.surnameInput).type(surname, { delay: Settings.delay });

    }

    fillEmailField(email) {
        cy.get(Home_Locators.emailInput).type(email, { delay: Settings.delay });
    }

    fillPhoneField(phone) {
        cy.get(Home_Locators.phoneInput).type(phone, { delay: Settings.delay });
    }

    selectProduct(product) {
        cy.get(Home_Locators.productSelect).select(product, { delay: Settings.delay });
    }

    selectServiceType(numberOption) {
        cy.get(Home_Locators.serviceTypeRadio(numberOption)).click();
    }

    selectContactMeans(type) {
        cy.get(Home_Locators.contactMeansCheckbox(type)).click();
    }

    fillMessage(message) {
        cy.get(Home_Locators.messageTextarea).type(message, { delay: Settings.delay });
    }

    attachFile(file) {
        cy.get(Home_Locators.attachment).attachFile(file);
    }

    submitForm() {
        cy.get(Home_Locators.submitButton).click();
    }
}

export default serviceForms;