export class PrimaryPage {

    verifyThumbnail() {
        cy.wait(8000)
        cy.reload()
        cy.get('.thumbnail').eq(0).should('be.visible')
    }
}