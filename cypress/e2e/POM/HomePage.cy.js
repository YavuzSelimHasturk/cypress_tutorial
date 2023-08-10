class Homepage{
    getLoginlink(){
        return cy.contains('log in', {matchCase:false}).click()
    }
    getVisit(){
        return cy.visit('https://qa.qualitydemy.com/')
    }
}
export default Homepage
