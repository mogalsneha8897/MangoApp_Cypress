export class LoginPage {

    enterUserName() {

        cy.get('#user_id').type("maassignment@yopmail.com")
    }

    enterPassword() {

        cy.get('#password').type("temp123")
    }

    clickLogin() {

        cy.get('[type=submit]').click()
    }
}