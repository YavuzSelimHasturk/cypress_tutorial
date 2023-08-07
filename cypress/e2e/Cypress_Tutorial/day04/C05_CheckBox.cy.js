/// <reference types = "Cypress" />

describe('Checkbox methodlari', () => {
    it.skip('Checkbox islemi', () => {
        cy.visit('https://the-internet.herokuapp.com/checkboxes')
        cy.get('#checkboxes > :nth-child(1)').check().should('be.checked')
        cy.get('#checkboxes > :nth-child(3)').uncheck().should('not.be.checked')
    });

    it('sirasina gore secme', () => {
        cy.visit('https://the-internet.herokuapp.com/checkboxes')
        cy.wait(5000)
        cy.get("input[type='checkbox']").eq(1).uncheck().should('not.be.checked')   // ayni locate sahip olanin kacincisini sectik
        cy.wait(5000)
        cy.get("input[type='checkbox']").first().check().should('be.checked')
    });
  
});