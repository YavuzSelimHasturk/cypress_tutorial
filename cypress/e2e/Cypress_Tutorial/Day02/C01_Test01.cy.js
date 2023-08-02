context('context kullanimi', () => {
    it('', () => {
        cy.visit('/')
    });
    it('title', () => {
        cy.visit('/')
        cy.title().should('contains','zon')
    });
});