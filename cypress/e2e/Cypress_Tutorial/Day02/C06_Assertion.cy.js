describe('Login Test', () => {
    
    it('QualityDemy Login test', () => {
        cy.visit('https://qa.qualitydemy.com')
        
        // 1-have-text
        cy.get('.btn-sign-in-simple').should('have.text','Log in')
        cy.get('.cookieButton > a').click()

        // 2-cy.url().should()
        cy.contains('Log in').click()
        cy.url().should('include','login')
    
        // 3-cy.title.should
        cy.title().should('eq','Login | QualityDemy')

        // 4-be.visible
        cy.get('.text-14px').should('be.visible')

        // 5-include text
        cy.get('.btn-sign-in-simple').should('include.text','Log')
    });
});