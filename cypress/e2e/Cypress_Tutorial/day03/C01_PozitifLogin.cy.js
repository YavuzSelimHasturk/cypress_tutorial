/* 
T02  Pozitif Login Testi
1- http://www.automationexercise.com adresine git
2- Signup/Login sayfasına git
3- “Login to your account” yazısının bulunduğunu doğrula
4- “New User Signup!” yazısının varlığını doğrula
5- babayigit@gmail.com 123456 ile giriş yap
6- Giriş yaptığını doğrula
7- Çıkış yap
8- Çıkış yapıldığını doğrula
*/

describe('Pozitif Login testi', () => {
    beforeEach(() => {
         // 1- http://www.automationexercise.com adresine git
         cy.visit('http://www.automationexercise.com')
    });
    it('Login Sayfa', () => {
        cy.viewport(1500,1200)  // test sayfasi olculerini ayarlayabiliyoruz.bunu config.js den de ayarlayabiliyoruz
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
        
        cy.log('Login to your account yazisi kontrol ediliyor') // test ekraninda yazi yazdik
        cy.get('.login-form > h2').should('be.visible')
        cy.get('.signup-form > h2').should('be.visible')
    });
    it('Giris Islemi', () => {
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
        cy.get('[data-qa="login-email"]').type('jacehe9065@webonoid.com')
        cy.get('[data-qa="login-password"]').type('123456Aa.,')
        cy.get('[data-qa="login-button"]').click()

        cy.get(':nth-child(10) > a').should('be.visible')
    });

    it('Cikis islemi', () => {
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click()  //
        cy.get('.login-form > h2').should('be.visible')        
        cy.log('Pozitif login testi tamamlandi')
    });



});