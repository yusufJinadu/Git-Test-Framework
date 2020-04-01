/// <reference types="cypress" />
import LoginPage from '../../../support/page-objects/landlord/login/loginPage'
const pageName = 'loginPage'
const page = new LoginPage()


export function login_func() {
  it(pageName + 'Registered landlords should be able to enter registration details and login ', function () {
    cy.fixture('loginData').then(function (loginDetails) {
      return loginDetails
    }).then(function (loginDetails) {
        Cypress.config( {"chromeWebSecurity": false})
        page.getStgEmailInput().click({force:true}).type(loginDetails.email)
        //page.getStgLoginButton().click({force:true})
    })
  })
}


