describe('', () => {
    beforeEach(() => { // beforeEach her bir it blogundan once calisir
        cy.visit('/')
    });
    it('title', () => {
        cy.title().should('eq','Amazon.com. Spend less. Smile more.')
        cy.title().should('include','Spend')
    });
    it('url', () => {
        cy.url().should('contains','amazon')
    });
});