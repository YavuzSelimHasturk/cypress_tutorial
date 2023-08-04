/// <reference types = "Cypress" />

describe('Super Domain', () => {
    it('Ayni Classta Iki Farkli Visit', () => {
        cy.visit('https://amazon.com')

        cy.visit('https://google.com')
        
        // bu sekilde bir siteden baska bir siteye gecis yapmak istersek hata verip testi durdurur
        // Ama ayni sitenin alt sayfalarina dair bir domain girilirse calisiyor sorun olmuyor
        // hatayi farkli origin domaine sahip bir adres girince yasiyoruz
    });
});