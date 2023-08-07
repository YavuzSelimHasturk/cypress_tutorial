/// <reference types="Cypress" />

describe('Multiple Windows', () => {

    it.skip('Attribute Remove', () => {

        cy.visit('https://the-internet.herokuapp.com/windows')
        cy.get('.example > a').invoke('removeAttr','target').click()
        cy.get('h3').should('have.text','New Window')

        // tikladigimiz bir link farkli bir windowda acarsa teste devam edemeyiz. invoke/remove attribute dersek 
        // mevcut sayfada acip devam eder. burada target attribute u devre disi birakiyor
    });


    it.skip('New Url', () => {

        cy.visit('https://the-internet.herokuapp.com/windows')
        cy.get('.example > a').then((element) => {
            const newUrl = element.prop('href')
            cy.visit('newUrl')
        })

    });

});