// <reference types="cypress" />
import Home_Locators from "../locators/home";
import serviceForms from "../pageObjects/service-forms";
import Person from "../fixtures/person";

describe('Central de Atendimento ao Cliente TAT', () => {
    let service = new serviceForms();

    beforeEach(() => {
        cy.visit('../../application/index.html');
    })

    // Trabalhando com biblioteca Lodash (executa uma função 10 vezes)
    Cypress._.times(10, () => {
        it('First Exercise: Compair Title', () => {
            cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT');
        })
    })

    it('First Exercise: Compair Title', () => {
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT');
    })

    it('Second Exercise: Fill Only Required Fields', () => {
        service.fillFullRequiredFields(Person);
        // cy.fillAllFields(Person)

        service.selectFile('cypress/fixtures/file.txt');
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
                cy.wrap($radio)
                    .check()
                    .should('be.checked');
            })
    })

    it('Seventh Exercise: Check all options, after uncheck last', () => {
        cy.get('input[type="checkbox"]')
            .each(($checkbox) => {
                cy.wrap($checkbox)
                    .check()
                    .should('be.checked');
            })

        cy.get('input[type="checkbox"]').last().uncheck().should('not.be.checked');
    })

    it('Eighth Exercise: Dealing with links that open in another tab in the browser', () => {
        // First alternative
        cy.get(Home_Locators.linkPrivacyPolicy).should('have.attr', 'target', '_blank');

        // Second alternative
        cy.get(Home_Locators.linkPrivacyPolicy)
            .invoke('removeAttr', 'target')
            .click();

        cy.contains('Política de privacidade')
            .should('be.visible');
    })

    it('Ninth Exercise: Freezing and advancing in time with the browser clock', () => {
        cy.clock();

        cy.fillAllFields(Person);

        service.selectFile('cypress/fixtures/file.txt');
        service.submitForm();

        cy.get(Home_Locators.messageSuccess).should('be.visible');

        cy.tick(3000);

        cy.get(Home_Locators.messageSuccess).should('not.be.visible');
    })

    it('Tenth Exercise: Show and Hidden messages of success and error using invoke method', () => {
        cy.get(Home_Locators.messageSuccess).should('not.be.visible');
        cy.get(Home_Locators.messageSuccess).invoke('show');
        cy.get(Home_Locators.messageSuccess).should('be.visible');

        cy.get(Home_Locators.messageSuccess).invoke('hide');
        cy.get(Home_Locators.messageSuccess).should('not.be.visible');
    })

    it('Eleventh Exercise: Show and Hidden messages of success and error using trigger method', () => {
        /*Esse teste não irá funcionar pois o elemento não funciona com mouse over
        cy.get(Home_Locators.messageSuccess).should('not.be.visible');
        cy.get(Home_Locators.messageSuccess).trigger('mouseover');
        cy.get(Home_Locators.messageSuccess).should('be.visible');

        cy.get(Home_Locators.messageSuccess).trigger('mouseout');
        cy.get(Home_Locators.messageSuccess).should('not.be.visible');*/
    })

    it('Twelfth Exercise: Fill Field Text Area using method invoke', () => {
        let message = Cypress._.repeat('ABC105KD90', 20);

        cy.get(Home_Locators.messageTextarea).invoke('val', message)
            .should('have.value', message);
    })

    it('Thirteenth Exercise: HTTP Request', () => {
        cy.request('https://jsonplaceholder.typicode.com/posts')
            .should((response) => {
                expect(response.status).to.eq(200);
                expect(response.body).to.have.length(100);
                expect(response).to.have.property('headers');
                expect(response).to.have.property('duration');
                console.log(response)
            })
    })
})