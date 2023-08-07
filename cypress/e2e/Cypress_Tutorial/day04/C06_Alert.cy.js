/// <reference types = "Cypress" />


describe('JS Alerts Click', () => {
    it.skip('Only Alerts', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get(':nth-child(1) > button').click()  // cypresss default olarak tamam a tiklar
        cy.get('#result').should('have.text','You successfully clicked an alert')
    });
    it.skip('Confirm alerts', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get(':nth-child(2) > button').click() 
        cy.get('#result').should('have.text','You clicked: Ok')

        // default olarak ok tikladi
    });
    it.skip('Confirm alerts', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.wait(3000)
        cy.get(':nth-child(2) > button').click() 
       
        cy.on('window:confirm', () => { // on() fonksiyonu JQuery fonksiyonudur. Browser'da pencerelerin kontrolunu saglar
            return false
        })
        
        cy.get('#result').should('have.text','You clicked: Cancel')       
    });

    it('Prompt Alert', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.wait(3000)
        cy.get(':nth-child(3) > button').click()

        cy.window().then('$windowsElement', () => {
            cy.stub('$windowsElement','prompt').returns('Yavuz')
        })
    });
});
