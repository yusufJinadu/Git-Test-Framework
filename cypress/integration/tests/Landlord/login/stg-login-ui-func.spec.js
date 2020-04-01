/// <reference types="cypress" />
import {stg_login_ui_func} from '../../../../functions/landlord/login/login'
  describe('Enter email addres and get redirected to the sso login page', function() {
    Cypress.config({   "chromeWebSecurity": false})
    before(function () {
        cy.visit(Cypress.env('ll_url')+'/de/login')
    })
    stg_login_ui_func()
   
  })


  




  /*
  describe('Enter where would you like to live via neighborhood ,enter prefered property, enter personal details and complete signup', function() {
    before(function () {
        cy.window().then((win) => {
          win.sessionStorage.clear()
        })
        cy.visit(Cypress.env('tn_url')+'/de/auth/register/propertyLocation')
      })
    it('write registration data', function(){
        cy.writeFile("cypress/fixtures/registrationData.json", data() )
    })
    selectDesiredAreaByNeighborhood_func()
    selectPreferedProperty_func()
    registerAccount_func()
  })*/