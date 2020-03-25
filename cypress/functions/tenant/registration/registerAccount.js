/// <reference types="cypress" />
import RegisterAccountPage from '../../../support/page-objects/registration/registerAccountPage'
const pageName = 'register account page'
export function registerAccount() {
    const registerAccountPage = new RegisterAccountPage()
    it(pageName + 'page should contain a step 3 paragraph with a text of Schritt 3', function () {
        registerAccountPage.getStepParagraph().should('exist')
        registerAccountPage.getStepParagraph().invoke('text').should('include', 'Schritt 3')
      })

      it(pageName + ' should contain a Registration header with a text of Anmeldung', function () {
        registerAccountPage.getStepPurpose().should('exist')
        registerAccountPage.getStepPurpose().invoke('text').should('include', 'Anmeldung')
      })

      it(pageName + ' should contain a firstname input with a vorname label witha a required sign , a name eingeben placeholder no errors and be required  ', function () {
        registerAccountPage.getFirstNameError().should('not.exist')
        registerAccountPage.getFirstNameInput().should('exist')
        registerAccountPage.getFirstNameInput().invoke('attr','placeholder').should('include', 'Name eingeben')
        registerAccountPage.getFirstNameInput().invoke('attr','ng-reflect-required').should('exist')
      })

      it(pageName + ' should contain a lasttname input with a vorname label witha a required sign , a name eingeben placeholder no errors and be required  ', function () {
        registerAccountPage.getLastNameError().should('not.exist')
        registerAccountPage.getLastNameInput().should('exist')
        registerAccountPage.getLastNameInput().invoke('attr','placeholder').should('include', 'Name eingeben')
        registerAccountPage.getLastNameInput().invoke('attr','ng-reflect-required').should('exist')
      })
     
      it(pageName + ' should contain a email input with an email label with a required sign , a email@beispiel.de placeholder no errors and be required  ', function () {
        registerAccountPage.getEmailError().should('not.exist')
        registerAccountPage.getEmailInput().should('exist')
        registerAccountPage.getEmailInput().invoke('attr','placeholder').should('include', 'email@beispiel.de')
        registerAccountPage.getEmailInput().invoke('attr','ng-reflect-required').should('exist')
      })

      it(pageName + ' should contain a Password input with a passwort label with a required sign , a passwort placeholder no errors and be required  ', function () {
        registerAccountPage.getPasswordError().should('not.exist')
        registerAccountPage.getPasswordInput().should('exist')
        registerAccountPage.getPasswordInput().invoke('attr','placeholder').should('include', 'Passwort')
        registerAccountPage.getPasswordInput().invoke('attr','ng-reflect-required').should('exist')
      })

      
      it(pageName + ' firstname input ahould yield appropriate errors depending on input ', function () {
        registerAccountPage.getFirstNameInput().click()
        registerAccountPage.getBody().click()
        registerAccountPage.getFirstNameError().should('exist')
        registerAccountPage.getFirstNameError().invoke('text').should('include','Pflichtfeld!')
        registerAccountPage.getFirstNameInput().click().type('y')
        registerAccountPage.getFirstNameError().should('not.exist')
        registerAccountPage.getFirstNameInput().clear()
        
      })

      it(pageName + ' last name input ahould yield appropriate errors depending on input ', function () {
        registerAccountPage.getLastNameInput().click()
        registerAccountPage.getBody().click()
        registerAccountPage.getLastNameError().should('exist')
        registerAccountPage.getLastNameError().invoke('text').should('include','Pflichtfeld!')
        registerAccountPage.getLastNameInput().click().type('y')
        registerAccountPage.getLastNameError().should('not.exist')
        registerAccountPage.getLastNameInput().clear()
      })

      it(pageName + ' email input ahould yield appropriate errors depending on input ', function () {
        registerAccountPage.getEmailInput().click()
        registerAccountPage.getBody().click()
        registerAccountPage.getEmailError().should('exist')
        registerAccountPage.getEmailError().invoke('text').should('include','Pflichtfeld!')
        registerAccountPage.getEmailInput().click().type('y')
        registerAccountPage.getBody().click()
        registerAccountPage.getEmailError().should('exist')
        registerAccountPage.getEmailError().invoke('text').should('include','Das Format entspricht keiner E-Mail-Adresse')
        registerAccountPage.getEmailInput().click().type('y@')
        registerAccountPage.getBody().click()
        registerAccountPage.getEmailError().should('exist')
        registerAccountPage.getEmailError().invoke('text').should('include','Das Format entspricht keiner E-Mail-Adresse')
        registerAccountPage.getEmailInput().click().clear().type('y@j')
        registerAccountPage.getBody().click()
        registerAccountPage.getEmailError().should('not.exist')
        registerAccountPage.getEmailInput().clear()
      })

      it(pageName + ' password input ahould yield appropriate errors depending on input ', function () {
        registerAccountPage.getPasswordInput().click()
        registerAccountPage.getBody().click()
        registerAccountPage.getPasswordError().should('exist')
        registerAccountPage.getPasswordError().invoke('text').should('include','Pflichtfeld!')
        registerAccountPage.getPasswordInput().click().clear().type('1')
        registerAccountPage.getPasswordError().invoke('text').should('include','Wert zu kurz')
        registerAccountPage.getPasswordInput().click().clear().type('1234')
        registerAccountPage.getPasswordError().invoke('text').should('include','Wert zu kurz')
        registerAccountPage.getPasswordInput().click().clear().type('1234567')
        registerAccountPage.getPasswordError().should('not.exist')
        registerAccountPage.getPasswordInput().clear()
      })

      it(pageName + ' Accept Conditions checkbox should be unchecked ', function () {
        registerAccountPage.getPolicyCheckBox().should('be','unchecked')
      })
      /*
      it(pageName + ' Clicking on terms of use should redirect to the AGB page ', function () {
        var url
        registerAccountPage.getTermsOfUseLink().then((link) => {
            url = link.attr('href')
            cy.Visit(url)
        })
      })*/

      it(pageName + ' user should be able to fill form and complete signup ', function () {
        cy.fixture('registrationData').then(function (data) {
            return data.personalInformation
          }).then(function (personalInformation) {
              registerAccountPage.getFirstNameInput().click().clear().type(personalInformation.firstName)
              registerAccountPage.getFinishButton().invoke('attr','ng-reflect-disabled').should('include',true)
              registerAccountPage.getLastNameInput().click().clear().type(personalInformation.lastName)
              registerAccountPage.getFinishButton().invoke('attr','ng-reflect-disabled').should('include',true)
              registerAccountPage.getEmailInput().click().clear().type(personalInformation.email)
              registerAccountPage.getFinishButton().invoke('attr','ng-reflect-disabled').should('include',true)
              registerAccountPage.getPasswordInput().click().clear().type(personalInformation.password)
              registerAccountPage.getFinishButton().invoke('attr','ng-reflect-disabled').should('include',true)
              registerAccountPage.getPolicyCheckBox().click()
              registerAccountPage.getFinishButton().invoke('attr','ng-reflect-disabled').should('include',false)
          })
      })

     
      
   
  }