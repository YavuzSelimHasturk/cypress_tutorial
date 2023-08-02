
describe('Temel Cypress Komutlari', () => {
    it('cy.visit komutu', () => {
        cy.visit('https://www.amazon.com') // base url tanimli degilse
        cy.visit('/') // base url tanimli ise
        
    });

    it('cy.visit komutu.2', () => {
      //  cy.visit('/en/faqs')  // url in alt sayfasina erisim  
    });

    it('cy.visit title komutu', () => {
        cy.visit('/')
        cy.title().should('equal','Amazon.com. Spend less. Smile more.')  // tam esitlik durumu
        cy.title().should('include','Amazon') // verilen string icerme durumu
        cy.title().should('contains', 'Spend less')
    });
    it('cy.url komutu', () => {
        cy.visit('/')
        cy.url().should('eq','https://www.amazon.com/') // tam esitlik durumu
        cy.url().should('include','mazo')
    
    });

    // it.only yaparsak sadece o testi calistiririz, it.skip dersek o testin es gecilmesini saglar
});