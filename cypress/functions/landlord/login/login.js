/// <reference types="cypress" />
import LoginPage from '../../../support/page-objects/landlord/login/loginPage'
const pageName = 'loginPage'
const page = new LoginPage()

export function stg_login_ui_func() {
    it('immomio logo should exist on page', function () {
        page.getImmomioLogo().should('exist')
    })

    it('Willkomen text should exist on page', function () {
        cy.checkElementExistenceAndText(page.getWelcomeParagraph, 'Willkommen')
    })

    it('Login Vermieter text should exist on page', function () {
        cy.checkElementExistenceAndText(page.getPurposeParagraph, 'Login Vermieter')
    })

    it(pageName + ' should contain a email input with an E-mail Addresse label with a required sign , a email@beispiel.de placeholder and be required '/** and no errors  */, function () {
        //cy.noInitialInputError(page.getEmailError)
        cy.checkInputLabelAndPlaceholder(page.getStgEmailInput, page.getStgEmailLabel, "email@beispiel.de", "E-Mail Adresse")
        cy.checkRequiredInput(page.getStgEmailInput, page.getStgEmailLabel, 'ng-reflect-required', "*")
    })

    it(pageName + ' should contain an Anmelden button ' /*which should be disabled until all required fields are filled '*/, function () {
        cy.checkElementExistenceAndText(page.getStgLoginButton, 'Anmelden')
    })

    it(pageName + ' should contain a Nock keinen Account?Registrieren text and clicking the registration link should redirect to the registration page' /*which should be disabled until all required fields are filled '*/, function () {
        cy.checkElementExistenceAndText(page.getStgNotRegisteredText, 'Noch keinen Account?')
        cy.checkElementExistenceAndText(page.getRegistrationRedirectionLink, 'Registrieren!')
        page.getRegistrationRedirectionLink().click({force:true})
        cy.url().should('include','register/authentication')
        cy.go('back')
    })
    

    it(pageName + 'Registered landlords should be able to enter registration details and login ', function () {
        stgLogin()
    })
}

export function stg_login_func() {
    it(pageName + 'Registered landlords should be able to enter registration details and login ', function () {
        stgLogin()
    })
}

export function ssoLogin_ui_func(){
    it('immomio logo should exist on page', function () {
        page.getSsoImmomioLogo().should('exist')
    })

    it('Willkomen text should exist on page', function () {
        cy.checkElementExistenceAndText(page.getWelcomeParagraph, 'Willkommen')
    })

    it('Passwort eingeben text should exist on page', function () {
        cy.checkElementExistenceAndText(page.getPurposeParagraph, 'Passwort eingeben')
    })
    it(pageName + ' should contain a email input with an Benutzername oder E-Mail label with a required sign  ', function () {
        //cy.noInitialInputError(page.getEmailError)
        cy.checkInputAndLabel(page.getSsoUsernameInput, page.getSsoUsernameLabel, "Benutzername oder E-Mail")
        //cy.checkRequiredInput(page.getStgEmailInput, page.getStgEmailLabel, 'ng-reflect-required', "*")
    })

    it(pageName + ' should contain a password input with an Passwort label with a required sign , a Passwort placeholder  ', function () {
        //cy.noInitialInputError(page.getEmailError)
        cy.checkInputLabelAndPlaceholder(page.getSsoPasswordInput, page.getSsoPasswordLabel, "Passwort","Passwort")
        //cy.checkRequiredInput(page.getStgEmailInput, page.getStgEmailLabel, 'ng-reflect-required', "*")
    })

    it(pageName + ' should contain a forgot password landlord link and clicking on it should redirect user to the password reset page', function () {
        cy.checkElementExistenceAndText(page.getForgotPasswordLandlordLink,'Passwort vergessen Vermieter')
        page.getForgotPasswordLandlordLink().click({force:true})
        cy.url().should('include','app.itg.immomio.com/de/reset-password/request-reset')
        cy.go('back')
    })

    it(pageName + ' should contain a forgot password applicants link and clicking on it should redirect user to the password reset page', function () {
        cy.checkElementExistenceAndText(page.getForgotPasswordApplicantLink,'Forgot password Applicants')
        page.getForgotPasswordApplicantLink().click({force:true})
        cy.url().should('include','tenant.itg.immomio.com/de/auth/reset-password/request-reset')
        cy.go('back')
    })

    it(pageName + ' Anmelden Button should exist on page', function () {
        page.getSsoLoginButton().invoke('val').should('include','Log In')
    })
    it(pageName + 'Registered landlords should be able to enter registration details and login ', function () {
        ssoLogin()
    })
}

export function ssoLogin_func() {
    it(pageName + 'Registered landlords should be able to enter registration details and login ', function () {
        ssoLogin()
  
    })
}

function stgLogin(){
    cy.fixture('loginData').then(function (loginDetails) {
        return loginDetails
    }).then(function (loginDetails) {
        page.getStgEmailInput().click({ force: true }).type(loginDetails.email)
        //page.getStgLoginButton().click({force:true})
    })

}

function ssoLogin(){
    cy.fixture('loginData').then(function (loginDetails) {
        return loginDetails
    }).then(function (loginDetails) {
        page.getSsoUsernameInput().click({ force: true }).clear().type(loginDetails.email)
        page.getSsoPasswordInput().click({ force: true }).clear().type(loginDetails.password)
        page.getSsoLoginButton().trigger('mouseover').click({force:true})
        cy.url().then((url) => {
            console.log(url)
            if(url.includes('login')){
                page.getStgEmailInput().click({ force: true }).clear().type(loginDetails.email)
                page.getStgLoginButton().trigger('mouseover').click({force:true})
            }
        }).then(() => cy.url().should('include','app.stg.immomio.com/de/properties?'))
    })
}


