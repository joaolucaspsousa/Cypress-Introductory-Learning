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

    it('Second Exercise: Fill Full Fields', () => {
        service.fillFullRequiredFields(Person.name, Person.surname, Person.email, Person.phone, Person.product, Person.serviceType, Person.contactMeans, Person.message);

        service.attachFile('file.txt');

        service.submitForm();

        cy.get(Home_Locators.messageSuccess).should('be.visible');
    })
})