/// <reference types="cypress" />
import {selectDesiredAreaByAddress_ui_func, selectDesiredAreaByNeighborhood_ui_func} from '../../../../functions/tenant/registration/propertyLocation'
import {selectPreferedProperty_ui_func} from '../../../../functions/tenant/registration/propertyPreference'
import {registerAccount_ui_func} from '../../../../functions/tenant/registration/registerAccount'
import {generateRandomEmail} from '../../../../functions/general'
//import {registerViaGoogle} from '../../../../functions/tenant/registration/registerViaGoogle'
const data = () => {
  return  {
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
}

  describe('Enter where would you like to live via address,enter prefered property, enter personal details and complete signup', function() {
    before(function () {
      cy.window().then((win) => {
        win.sessionStorage.clear()
      })
      cy.visit(Cypress.env('tn_url')+'/de/auth/register/propertyLocation')
    })
  it('write registration data', function(){
      cy.writeFile("cypress/fixtures/registrationData.json", data() )
  })
    selectDesiredAreaByAddress_ui_func()
    selectPreferedProperty_ui_func()
    registerAccount_ui_func()
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
    selectDesiredAreaByNeighborhood_ui_func()
    selectPreferedProperty_ui_func()
    registerAccount_ui_func()
  })
  

  /*
  describe('Enter where would you like to live via address,enter prefered property, enter personal details and complete signup via facebook', function() {
    selectDesiredAreaByAddress()
    selectPreferedProperty()
    registerViaGoogle()
  })
  */










