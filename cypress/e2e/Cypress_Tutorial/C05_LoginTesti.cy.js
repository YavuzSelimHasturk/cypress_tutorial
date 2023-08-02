describe('Login Test', () => {
    
    it('QualityDemy Login test', () => {
        cy.visit('https://qa.qualitydemy.com')
        cy.get('.cookieButton > a').click()
        
        /*
        1.yol
        cy.get('.btn-sign-in-simple').click()
        login yazisina lcoate alarak tikladik
        */

        /*
        2.yol
        cy.contains('Log in').click()
        Log in yazisini bulup tikladik
        */

        //3.yol
        cy.contains('log in',{matchCase:false}).click()
        // Log ina yazisina case sensitive durumuna bakmaksizin ({matchCase:false}) tikladik

        cy.get('#login-email').type('mb@babayigit.net')
        cy.get('#login-password').type('M123456.b{enter}')
        //cy.get('#sign_up > :nth-child(3) > btn').click
    
    });
});