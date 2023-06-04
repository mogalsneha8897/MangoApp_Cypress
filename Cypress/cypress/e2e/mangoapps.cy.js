///<reference types = 'cypress'/>

import 'cypress-file-upload'

import { LoginPage } from './pages/function_page/login_page_m'
import { ComposeBoxPage } from './pages/function_page/composebox_page_m'
import { PrimaryPage } from './pages/function_page/PrimaryPage_m'

const loginPage = new LoginPage()
const composeBoxPage = new ComposeBoxPage()
const primaryPage = new PrimaryPage()

describe("Mangoapp Application Test Assignment", () => {

    it("Testing MangoApp Application steps", () => {

        // Launch the URL
        cy.visit('https://siddasia.mangoapps.com/')
        // Login to the application
        loginPage.enterUserName('maassignment@yopmail.com')
        loginPage.enterPassword('temp123')
        loginPage.clickLogin()
        //Upload the file and verfiy success message
        composeBoxPage.clickUpdate()
        composeBoxPage.selectShareFile()
        composeBoxPage.enterMessage()
        composeBoxPage.clickAttach()
        composeBoxPage.uploadFile()
        composeBoxPage.shareFileAndVerifySuccess()
        //Verify thumbnail
        primaryPage.verifyThumbnail()

    })
})