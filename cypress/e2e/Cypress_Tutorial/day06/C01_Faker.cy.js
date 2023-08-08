/// <reference types="Cypress" />
import { faker } from  '@faker-js/faker'


describe('Faker Kullanimi', () => {
/* Faker kurulumu yapilacak
npm install --save-dev @faker-js/faker
*/


    it('Automationexercise.com Login testi', () => {
        cy.visit('https://www.automationexercise.com')
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click()

        let firstName= faker.person.firstName('male')
        let lastName=faker.person.lastName()
        cy.get('[data-qa="signup-name"]').type(firstName+lastName)

        let email= faker.internet.email()
        cy.get('[data-qa="signup-email"]').type(email)
        cy.get('[data-qa="signup-button"]').click()

        cy.get('#id_gender1').click() //gender secimi

        let password = faker.internet.password()
        cy.get('[data-qa="password"]').type(password) //password girisi

        cy.get ('[data-qa="first_name"]').type(firstName)
        cy.get ('[data-qa="last_name"]').type(lastName) //isim ve soyisim yeniden girildi

        let address = faker.location.streetAddress()
        cy.get ('[data-qa="address"]').type(address) //adres girisi
        cy.wait(3000)

        cy.get ('[data-qa="country"]').select(3)

        let state = faker.location.state()
        cy.get ('[data-qa="state"]').type(state) //state girisi

        let city = faker.location.city()
        cy.get ('[data-qa="city"]').type(city) //city girisi

        let zipCode = faker.location.zipCode('#####')
        cy.get ('[data-qa="zipcode"]').type(zipCode) //zipCode girisi

        let phoneNumber = faker.phone.number('###-###-##-##')
        cy.get('[data-qa="mobile_number"]').type(phoneNumber) //phoneNumber girisi

        cy.get('[data-qa="create-account"]').click() //create account butonuna tiklandi

        cy.get('b').should('contains.text','Account Created!')
    });
});