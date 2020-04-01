/// <reference types="cypress" />
import {stg_login_func} from '../../../../functions/landlord/login/login'
  describe('Enter email addres and get redirected to the sso login page', function() {
    Cypress.config({   "chromeWebSecurity": false})
    before(function () {
        cy.visit(Cypress.env('ll_url')+'/de/login')
    })
    stg_login_func()
   
  })