/// <reference types = "Cypress" />

describe('Scroll Islemleri', () => {
    it('Scroll ile sayfayi belirli bir yere kaydirmak', () => {
        cy.visit('https://tripandway.com')
        cy.get('.portfolio-page > .container > :nth-child(1) > .col-md-12 > .main-headline > .headline > h2').scrollIntoView({duration:1000})
        // Locate alinan yere kaydirir duration ile belirttigimiz sure ne kadar zamanda oraya ilerleyecegi suresi.
        cy.wait(3000)
        cy.get('.service-area > .container > :nth-child(1) > .col-md-12 > .main-headline > .headline > h2').scrollIntoView()

    });

    it('Istedigimiz koordinata kaydirma', () => {
        cy.visit('https://tripandway.com')
        cy.scrollTo(0,1700)
    });

});