// <reference types="cypress" />
import Home_Locators from "../locators/home";
import serviceForms from "../pageObjects/service-forms";
import Person from "../fixtures/person";
import 'cypress-file-upload';

describe('Central de Atendimento ao Cliente TAT', () => {
    let service = new serviceForms();

    beforeEach(() => {
        cy.visit('../../application/index.html');
    })

    it('First Exercise: Compair Title', () => {
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT');
    })

    it('Second Exercise: Fill Only Required Fields', () => {
        service.fillFullRequiredFields(Person);
        // cy.fillAllFields(Person)

        service.attachFile('file.txt');
        service.submitForm();

        cy.get(Home_Locators.messageSuccess).should('be.visible');
    })

    it('Third Exercise: Dont Fill One Or More Required Fields', () => {
        service.fillNameField(Person.name);
        service.fillSurnameField(Person.surname);

        service.selectProduct(Person.product);
        service.selectServiceType(Person.serviceType);
        service.fillMessage(Person.message);

        service.submitForm();
        cy.get(Home_Locators.messageFailure).should('be.visible');
    })

    it('Fourth Exercise: Validate Type Input Telefone Number', () => {
        service.fillPhoneField('ABC123456789POI');
        cy.get(Home_Locators.phoneInput).invoke('val').should('match', /[0-10]/);
    })

    it('Fifth Exercise: Fill and Clear Fields Name, Surname, Email and Phone', () => {
        service.fillNameField(Person.name);
        cy.get(Home_Locators.nameInput).should('have.value', Person.name);
        cy.get(Home_Locators.nameInput).clear().should('have.value', '');

        service.fillSurnameField(Person.surname);
        cy.get(Home_Locators.surnameInput).should('have.value', Person.surname);
        cy.get(Home_Locators.surnameInput).clear().should('have.value', '');

        service.fillEmailField(Person.email);
        cy.get(Home_Locators.emailInput).should('have.value', Person.email);
        cy.get(Home_Locators.emailInput).clear().should('have.value', '');

        service.fillPhoneField(Person.phone);
        cy.get(Home_Locators.phoneInput).should('have.value', Person.phone);
        cy.get(Home_Locators.phoneInput).clear().should('have.value', '');
    })

    it('Sixth Exercise: Check each option of the radio button', () => {
        cy.get('input[type="radio"]')
            .each(($radio) => {
                cy.wrap($radio).check().should('be.checked');
            })
    })

    it('Seventh Exercise: Check all options, after uncheck last', () => {
        cy.get('input[type="checkbox"]')
            .each(($checkbox) => {
                cy.wrap($checkbox).check().should('be.checked');
            })

        cy.get('input[type="checkbox"]').last().uncheck().should('not.be.checked');
    })
})