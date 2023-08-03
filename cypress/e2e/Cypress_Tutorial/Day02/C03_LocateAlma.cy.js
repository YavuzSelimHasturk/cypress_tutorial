describe('Locate Alma', () => {
    it('cy.get komutu', () => {
        cy.visit('/')
        cy.get('#APjFqb').type('cypress{enter}')  
        cy.get('div#hdtb-msb div:nth-child(2) > a').click()
    });

    // xpath le de alinabilir ancak get() ten sonra baslayan tek tirnak ile xpath in icindeki tek tirnak 
    // karisabiliyor. Bu yuzden xpathin icindeki tek tirnagi "" bu sekilde yapabiliriz

    // CSS selector ile yapiyorsak id yerine #, class ismi yerine . koymak yeterlidir
});