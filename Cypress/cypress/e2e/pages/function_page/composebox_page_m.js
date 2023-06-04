
export class ComposeBoxPage {

    clickUpdate() {
        cy.get('.fa-newspaper').should('not.be.visible')
        cy.get('.fa-pen-to-square').trigger('mouseover').click()
        cy.get('.fa-newspaper').should('be.visible').click()
    }

    selectShareFile() {
        cy.get('#token-input-myTeams').click()
        cy.get('#myTeams').invoke('show')
        cy.contains('Assignment 1').click()
    }

    enterMessage() {
        cy.get('#project_status_update_team').type('This is a test update')
    }

    clickAttach() {
        cy.get('.attachLinkonDialog').click()
    }

    uploadFile() {
        cy.get('#fileupload').attachFile('sample.pdf')
        cy.get('.file-upload-complete').should('be.visible')
        cy.get('#btn_file_upload').click()
    }
    shareFileAndVerifySuccess() {
        cy.get('#ms-feed-btn').click()
        cy.get('#postSuccessMsg').should("exist")
    }
}