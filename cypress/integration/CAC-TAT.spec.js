// <reference types="cypress" />

describe("Central de Atendimento ao Cliente TAT", () => {
    it("Deve acessar a Central de Atendimento ao Cliente TAT", () => {
        cy.visit("../../application/index.html");
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT');
    })
})