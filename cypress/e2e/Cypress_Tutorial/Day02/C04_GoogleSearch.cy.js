describe('', () => {
    beforeEach(() => {
        cy.visit('/')
    });
    it('google da film aratma', () => {
        cy.get('#APjFqb').type('3 idiots{enter}')  
      //  cy.get('#APjFqb').type('black panther{enter}')  bu haliyle onceki aramanin devamina yazar
    });
    it('yeni film aramasi', () => {
         cy.get('#APjFqb').type('black panther{enter}')  
    });
});