/// <reference types="cypress" />
import RegisterAccountPage from '../../../support/page-objects/registration/registerAccountPage'
const pageName = 'register account page'
const registerAccountPage = new RegisterAccountPage()
const page = new RegisterAccountPage()
export function registerAccount() {
    
    it(pageName + 'page should contain a step 3 paragraph with a text of Schritt 3', function () {
      cy.checkElementExistenceAndText(page.getStepParagraph,'Schritt 3')
      })

      it(pageName + ' should contain a Registration header with a text of Anmeldung', function () {
        cy.checkElementExistenceAndText(page.getStepPurpose,'Anmeldung')
      })

      it(pageName + ' should contain a firstname input with a vorname label witha a required sign , a name eingeben placeholder no errors and be required  ', function () {
        cy.noInitialInputError(page.getFirstNameError)
        cy.checkInputLabelAndPlaceholder(page.getFirstNameInput,page.getFirstNameLabel,"Name eingeben","Vorname")
        cy.checkRequiredInput(page.getFirstNameInput,page.getFirstNameLabel,'ng-reflect-required',"*")
      })

  
      it(pageName + ' should contain a lasttname input with a vorname label witha a required sign , a name eingeben placeholder no errors and be required  ', function () {
        cy.noInitialInputError(page.getLastNameError)
        cy.checkInputLabelAndPlaceholder(page.getLastNameInput,page.getLastNameLabel,"Name eingeben","Nachname")
        cy.checkRequiredInput(page.getLastNameInput,page.getLastNameLabel,'ng-reflect-required',"*")
      })
      
     
      it(pageName + ' should contain a email input with an email label with a required sign , a email@beispiel.de placeholder no errors and be required  ', function () {
        cy.noInitialInputError(page.getEmailError)
        cy.checkInputLabelAndPlaceholder(page.getEmailInput,page.getEmailLabel,"email@beispiel.de","E-Mail Adresse")
        cy.checkRequiredInput(page.getEmailInput,page.getEmailLabel,'ng-reflect-required',"*")
      })


      it(pageName + ' should contain a Password input with a passwort label with a required sign , a passwort placeholder no errors and be required  ', function () {
        cy.noInitialInputError(page.getPasswordError)
        cy.checkInputLabelAndPlaceholder(page.getPasswordInput,page.getPasswordLabel,"Passwort","Passwort")
        cy.checkRequiredInput(page.getPasswordInput,page.getPasswordLabel,'ng-reflect-required',"*")
      })

      
      it(pageName + ' firstname input should yield appropriate errors depending on input ', function () {
        cy.genericRequiredInputErrorCheck(page.getFirstNameInput,page.getBody,page.getFirstNameError)  
      })

      it(pageName + ' last name input should yield appropriate errors depending on input ', function () {
        cy.genericRequiredInputErrorCheck(page.getLastNameInput,page.getBody,page.getLastNameError)  
      })

      it(pageName + ' email input ahould yield appropriate errors depending on input ', function () {
        cy.emailInputErrorCheck(page.getEmailInput,page.getBody,page.getEmailError)
  
      })

      it(pageName + ' password input should yield appropriate errors depending on input ', function () {
        cy.passwordInputErrorCheck(page.getPasswordInput,page.getBody,page.getPasswordError)
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