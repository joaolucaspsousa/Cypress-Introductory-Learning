// <reference types="cypress" />
import Home_Locators from "./locators/home";
import serviceForms from "./class/service-forms";
import Person from "./person/person";
import 'cypress-file-upload';

describe('Central de Atendimento ao Cliente TAT', () => {
    let service = new serviceForms();

    beforeEach(() => {
        cy.visit('../../application/index.html');
    })

    it('First Exercise: Compair Title', () => {
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT');
    })

    /*it('Second Exercise: Fill Only Required Fields', () => {
        service.fillFullRequiredFields(Person.name, Person.surname, Person.email, Person.phone, Person.product, Person.serviceType, Person.contactMeans, Person.message);

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
    })*/

    it('Fourth Exercise: Validate Type Input Telefone Number', () => {
        service.fillPhoneField('ACB1234567890OK');
        cy.get(Home_Locators.phoneInput).should('have.value', '1234567890');
    })
})