/// <reference types="cypress" />
import {selectDesiredAreaByAddress_func, selectDesiredAreaByNeighborhood_func} from '../../../../functions/tenant/registration/propertyLocation'
import {selectPreferedProperty_func} from '../../../../functions/tenant/registration/propertyPreference'
import {registerAccount_func} from '../../../../functions/tenant/registration/registerAccount'
import {generateRandomEmail} from '../../../../functions/general'

const data = (() => { 
return {
    "desiredResidence": {
        "postCode": "56821",
        "city": "Ellenz-Poltersdorf",
        "street": "Moselweinstraße",
        "houseNumber": "117",
        "includedDistricts": [
            "Ellenz",
            "Poltersdorf"
        ]
    },
    "desiredProperty": {
        "maxPrice": 5000,
        "minLivingSpace": 70,
        "minNumberOfRooms": 2,
        "earliestDateAvailable": "current"
    },
    "personalInformation": {
        "firstName": "Johny",
        "lastName": "Blank",
        "email": generateRandomEmail(),
        "password": "sample123"
    }
}
})



  describe('Enter where would you like to live via address,enter prefered property, enter personal details and complete signup', function() {
    before(function () {
        cy.window().then((win) => {
          win.sessionStorage.clear()
        })
        cy.visit(Cypress.env('tn_url')+'/de/auth/register/propertyLocation')
      })
      console.log('data',data)
    it('write registration data', function(){
        cy.writeFile("cypress/fixtures/registrationData.json", data() )
    })
    selectDesiredAreaByAddress_func()
    selectPreferedProperty_func()
    registerAccount_func()
  })


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
  })