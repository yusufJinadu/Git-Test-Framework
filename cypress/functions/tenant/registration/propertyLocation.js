/// <reference types="cypress" />
import PropertyLocationPage from '../../../support/page-objects/registration/propertyLocationPage'
const pageName = 'propertyLocationPagePage'
export function selectDesiredAreaByAddress() {
  const propertyLocationPage = new PropertyLocationPage()
  before(function () {
    cy.window().then((win) => {
      win.sessionStorage.clear()
    })
    cy.visit(Cypress.env('tn_url')+'/de/auth/register/propertyLocation')
  })

  it(pageName + ' should contain a step 1 paragraph with a text of Schritt 1', function () {
    propertyLocationPage.getStepParagraph().should('exist')
    propertyLocationPage.getStepParagraph().invoke('text').should('eq', 'Schritt 1')
  })

  it(pageName + ' should contain a where doyou want to live header with a text of Wo möchten Sie wohnen?', function () {
    propertyLocationPage.getStepPurpose().should('exist')
    propertyLocationPage.getStepPurpose().invoke('text').should('eq', 'Wo möchten Sie wohnen?')
  })

  it(pageName + ' should contain an address use message with appropriate text text ', function () {
    propertyLocationPage.getStepPurposeWarning().should('exist')
    propertyLocationPage.getStepPurposeWarning().invoke('text').should('eq', 'Achtung! Dies ist nicht Ihre Adresse, sondern die Adresse, an der Sie eine Wohnung suchen')
  })

  it(pageName + ' should contain an empty street message with the apprropriate text', function () {
    propertyLocationPage.getEmptyStreetWarning().should('exist')
    propertyLocationPage.getEmptyStreetWarning().invoke('text')
      .should('eq', 'Wenn Sie den Straßennamen leer lassen, wird die Adresse berechnet, die in der Mitte der Postleitzahl liegt.')
  })

  it(pageName + ' should contain über address radio button and should have über adresse label', function () {
    propertyLocationPage.getSelectByAddressRadio().should('exist')
    propertyLocationPage.getSelectByAddressRadio().contains('Über Adresse').should('exist')
    propertyLocationPage.getSelectByAddressRadio().click({ force: true })
  })

  it(pageName + ' should contain postCode input, have a "PLZ" label, a "*"required sign and have a "Postleitzahl" placeholder and no errors', function () {
    cy.checkInputLabel(propertyLocationPage.getPostCodeInput,propertyLocationPage.getPostCodeLabel,"Postleitzahl","PLZ")
    cy.checkRequiredInput(propertyLocationPage.getPostCodeInput,propertyLocationPage.getPostCodeLabel,'ng-reflect-required',"*")
    cy.noInitialInputError(propertyLocationPage.getPostCodeError)
  })

  it(pageName + ' should contain city input, have a "Stadt" label, a "*"required sign and have a "Stadt eingeben" placeholder and no errors', function () {
    propertyLocationPage.getCityInput().should('exist')
    propertyLocationPage.getCityLabel().should('exist')
    propertyLocationPage.getCityLabel().invoke('text').should('include', 'Stadt')
    propertyLocationPage.getCityLabel().invoke('text').should('include', '*')
    propertyLocationPage.getCityInput().invoke('attr', 'placeholder').should('include', 'Stadt eingeben')
    propertyLocationPage.getCityError().should('not.exist')
  })

  it(pageName + ' should contain street input, have a "Straße" label, and have a "Straße eingeben" placeholder', function () {
    propertyLocationPage.getStreetInput().should('exist')
    propertyLocationPage.getStreetLabel().should('exist')
    propertyLocationPage.getStreetLabel().invoke('text').should('include', 'Straße')
    propertyLocationPage.getStreetInput().invoke('attr', 'placeholder').should('include', 'Straße eingeben')
  })

  it(pageName + ' should contain house number input, have a "Straße" label, and have a "Straße eingeben" placeholder', function () {
    propertyLocationPage.getStreetInput().should('exist')
    propertyLocationPage.getStreetLabel().should('exist')
    propertyLocationPage.getStreetLabel().invoke('text').should('include', 'Straße')
    propertyLocationPage.getStreetInput().invoke('attr', 'placeholder').should('include', 'Straße eingeben')
  })

  it(pageName + ' should contain use current location button and have "Nutze aktuellen Standort " text', function () {
    propertyLocationPage.getUseCurrentLocationButton().should('exist')
    propertyLocationPage.getUseCurrentLocationButton().invoke('text').should('include', 'Nutze aktuellen Standort')
  })

  it(pageName + ' should contain a radius slider with a "" label and respond to changes', function () {
    propertyLocationPage.getRadiusSlider().should('exist')
    propertyLocationPage.getRadiusSliderMax().should('exist')
    propertyLocationPage.getRadiusSliderMax().should('have.text', '10 km')
    propertyLocationPage.getRadiusSlider().invoke('val', 0).trigger('change', { force: true })
    propertyLocationPage.getRadiusSliderValue().invoke('text').should('include', '0 km')
    propertyLocationPage.getRadiusSlider().invoke('val', 5).trigger('change', { force: true })
    propertyLocationPage.getRadiusSliderValue().invoke('text').should('include', '5 km')
    propertyLocationPage.getRadiusSlider().invoke('val', 10).trigger('change', { force: true })
    propertyLocationPage.getRadiusSliderValue().invoke('text').should('include', '10 km')
  })

  it(pageName + ' Next button should be inactive if all required fields are not touched', function(){
      propertyLocationPage.getNextButton().invoke('attr','ng-reflect-disabled').should('include',true)
  })

  it(pageName + ' post code Input field should generate apropriate errors depending on entered value   ', function () {
    propertyLocationPage.getPostCodeInput().click()
    propertyLocationPage.getBody().click()
    propertyLocationPage.getPostCodeError().invoke('text').should('include', 'Pflichtfeld')
    propertyLocationPage.getPostCodeInput().click({ force: true }).type('12', { force: true })
    propertyLocationPage.getBody().click()
    propertyLocationPage.getPostCodeError().invoke('text').should('include', 'Eingabe ist keine gültige Postleitzahl')
    propertyLocationPage.getPostCodeInput().clear({ force: true }).click({ force: true }).type('123')
    propertyLocationPage.getBody().click()
    propertyLocationPage.getPostCodeError().invoke('text').should('include', 'Eingabe ist keine gültige Postleitzahl')
    propertyLocationPage.getPostCodeInput().clear({ force: true }).click({ force: true }).type('1234')
    propertyLocationPage.getBody().click()
    propertyLocationPage.getPostCodeError().should('not.exist')
    propertyLocationPage.getPostCodeInput().clear({ force: true }).click({ force: true }).type('123456789')
    propertyLocationPage.getBody().click()
    propertyLocationPage.getPostCodeError().invoke('text').should('include', 'Eingabe ist keine gültige Postleitzahl')
    propertyLocationPage.getPostCodeInput().clear({ force: true }).click({ force: true }).type('2229')
    propertyLocationPage.getBody().click()
    propertyLocationPage.getPostCodeError().should('not.exist')
  })

  it(pageName + ' City Input field should generate apropriate errors depending on entered value   ', function () {
    propertyLocationPage.getCityInput().click()
    propertyLocationPage.getBody().click()
    propertyLocationPage.getCityError().invoke('text').should('include', 'Pflichtfeld')
    propertyLocationPage.getCityInput().click({ force: true }).clear().type('d')
    propertyLocationPage.getCityError().should('not.exist')
  })

  /*
  it(' Next button should be inactive if all required fields are not filled', function(){
    propertyLocationPage.getRequiredInputs().each((input) => {
      input.click()
      console.log('input',input.val())
      input.val('')
      console.log('input',input.val())
      propertyLocationPage.getBody().click()
      //propertyLocationPage.getNextButton().invoke('attr','ng-reflect-disabled').should('eq',true)
      cy.pause()
      
    })  
  })
  */
  /*
  it(' Next button should be inactive if an error is on the ', function(){
   
              
    })
    */

  it(pageName + 'Renter should be able to enter apartment serach parameters using the adress and be redirected to the property preference ', function () {
    cy.fixture('registrationData').then(function (data) {
      return data.desiredResidence
    }).then(function (desiredResidence) {
      propertyLocationPage.getPostCodeInput().clear().type(desiredResidence.postCode)
      propertyLocationPage.getNextButton().invoke('attr','ng-reflect-disabled').should('include',false)
      propertyLocationPage.getCityInput().clear().click()
      propertyLocationPage.getCityInput().should('have.value', desiredResidence.city)
      propertyLocationPage.getStreetInput().invoke('val').should('not.be.empty')
      propertyLocationPage.getNumberInput().invoke('val').should('not.be.empty')
      propertyLocationPage.getStreetInput().clear().type(desiredResidence.street)
      propertyLocationPage.getNumberInput().type(desiredResidence.houseNumber)
      propertyLocationPage.getNextButton().click()
      cy.url().should('include', '/propertyPreferences')

    })
  })
}


export function selectDesiredAreaByNeighborhood() {
  const propertyLocationPage = new PropertyLocationPage()
  before(function () {
    cy.window().then((win) => {
      win.sessionStorage.clear()
    })
    cy.visit(Cypress.env('tn_url')+'/de/auth/register/propertyLocation')
  })

  it(pageName + ' should contain Über Stadtteile radio button and should have Über Stadtteile label', function () {
    propertyLocationPage.getSelectByDistrictRadio().should('exist')
    propertyLocationPage.getSelectByDistrictRadio().contains('Über Stadtteile').should('exist')
    propertyLocationPage.getSelectByDistrictRadio().click({ force: true })
  })

  it(pageName + ' should contain a step 1 paragraph with a text of Schritt 1', function () {
    propertyLocationPage.getStepParagraph().should('exist')
    propertyLocationPage.getStepParagraph().invoke('text').should('eq', 'Schritt 1')
  })

  it(pageName + ' should contain a where doyou want to live header with a text of Wo möchten Sie wohnen?', function () {
    propertyLocationPage.getStepPurpose().should('exist')
    propertyLocationPage.getStepPurpose().invoke('text').should('eq', 'Wo möchten Sie wohnen?')
  })

  it(pageName + ' should contain an address use message with appropriate text text ', function () {
    propertyLocationPage.getStepPurposeWarning().should('exist')
    propertyLocationPage.getStepPurposeWarning().invoke('text').should('eq', 'Achtung! Dies ist nicht Ihre Adresse, sondern die Adresse, an der Sie eine Wohnung suchen')
  })

  it(pageName + ' should contain a city/postcode input, a Stadt oder Plz label and a Stadt oder Plz eingeben placeholder', function () {
    propertyLocationPage.getCityOrPostCodeLabel().should('exist')
    propertyLocationPage.getCityOrPostCodeLabel().invoke('text').should('include', 'Stadt oder Plz')
    propertyLocationPage.getCityOrPostCodeInput().should('exist')
    propertyLocationPage.getCityOrPostCodeInput()
      .invoke('attr', 'placeholder')
      .should('include', 'Stadt oder Plz eingeben')

  })

  it(pageName + ' Next button should be inactive if all required fields are not touched', function(){
    propertyLocationPage.getNextButton().invoke('attr','ng-reflect-disabled').should('include',true)
})

  it(pageName + ' City/postCode Input field should generate apropriate errors depending on entered value', function () {
    propertyLocationPage.getCityOrPostCodeWarning().should('not.exist')
    propertyLocationPage.getCityOrPostCodeInput().click()
    propertyLocationPage.getBody().click()
    propertyLocationPage.getCityOrPostCodeWarning().invoke('text').should('include', 'Pflichtfeld')
    propertyLocationPage.getCityOrPostCodeInput().click().type('2')
    propertyLocationPage.getCityOrPostCodeWarning().should('not.exist')
  })

  it(pageName + ' City suggestion should dropdown based on enterd post code and a click should fill the input with appropriate value and be redirected to the property preference  ', function () {
    cy.fixture('registrationData').then(function (data) {
      return data.desiredResidence
    }).then(function(desiredResidence){
      propertyLocationPage.getCityOrPostCodeInput().clear().click().type(desiredResidence.postCode)
      propertyLocationPage.getNextButton().invoke('attr','ng-reflect-disabled').should('include',true)
      propertyLocationPage.getCitySuggestionDropdown().invoke('attr','aria-expanded').should('eq','true')
      propertyLocationPage.getCitySuggestionDropdown().invoke('text').should('include',desiredResidence.city)
      propertyLocationPage.getCitySuggestionDropdownText().click()
      propertyLocationPage.getCityOrPostCodeInput().invoke('val').should('include',desiredResidence.city)
      desiredResidence.includedDistricts.forEach((district) => {
      propertyLocationPage.getIncludedDistricts().contains(district).should('exist')
      propertyLocationPage.getIncludedDistricts().contains(district).click()
      propertyLocationPage.getNextButton().invoke('attr','ng-reflect-disabled').should('include',false)
      })
      propertyLocationPage.getNextButton().click()
      cy.url().should('include', '/propertyPreferences')
    })
    
  })




}

