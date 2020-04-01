/// <reference types="cypress" />
import {selectDesiredAreaByAddress_func, selectDesiredAreaByNeighborhood_func} from '../../../../functions/tenant/registration/propertyLocation'
import {login_func} from '../../../../functions/landlord/login/login'



  describe('Enter where would you like to live via address,enter prefered property, enter personal details and complete signup', function() {
    before(function () {
        cy.window().then((win) => {
          win.sessionStorage.clear()
        })
        cy.visit(Cypress.env('ll_url')+'/de/login')
      })
  
    login_func()
   
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