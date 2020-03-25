/// <reference types="cypress" />
import PropertyLocationPage from '../../../support/page-objects/registration/propertyLocationPage'
const pageName = 'propertyLocationPagePage'
const page = new PropertyLocationPage()
export function selectDesiredAreaByAddress() {
  before(function () {
    cy.window().then((win) => {
      win.sessionStorage.clear()
    })
    cy.visit(Cypress.env('tn_url')+'/de/auth/register/propertyLocation')
  })

  it(pageName + ' should contain a step 1 paragraph with a text of Schritt 1', function () {
    cy.checkElementExistenceAndText(page.getStepParagraph,'Schritt 1')
  })

  it(pageName + ' should contain a where doyou want to live header with a text of Wo möchten Sie wohnen?', function () {
    cy.checkElementExistenceAndText(page.getStepPurpose,'Wo möchten Sie wohnen?')
  })

  it(pageName + ' should contain a "use of address  message" with appropriate text text ', function () {
    cy.checkElementExistenceAndText(page.getAdressUse,'Achtung! Dies ist nicht Ihre Adresse, sondern die Adresse, an der Sie eine Wohnung suchen')
  })

  it(pageName + ' should contain an empty street message with the apprropriate text', function () {
    cy.checkElementExistenceAndText(page.getEmptyStreetWarning,'Wenn Sie den Straßennamen leer lassen, wird die Adresse berechnet, die in der Mitte der Postleitzahl liegt.')
  })

  it(pageName + ' should contain über address radio button and should have über adresse label', function () {
    cy.checkRadioLabel(page.getSelectByAddressRadio,'Über Adresse')
    page.getSelectByAddressRadio().click({ force: true })
  })

  it(pageName + ' should contain postCode input, have a "PLZ" label, a "*"required sign and have a "Postleitzahl" placeholder and no errors', function () {
    cy.noInitialInputError(page.getPostCodeError)
    cy.checkInputLabelAndPlaceholder(page.getPostCodeInput,page.getPostCodeLabel,"Postleitzahl","PLZ")
    cy.checkRequiredInput(page.getPostCodeInput,page.getPostCodeLabel,'ng-reflect-required',"*")
  })


  it(pageName + ' should contain City input, have a "Stadt" label, a "*"required sign and have a "Stadt eingeben"placeholder and no errors', function () {
    cy.noInitialInputError(page.getCityError)
    cy.checkInputLabelAndPlaceholder(page.getCityInput,page.getCityLabel,"Stadt eingeben","Stadt")
    cy.checkRequiredInput(page.getCityInput,page.getCityLabel,'ng-reflect-required',"*")
    
  })


  it(pageName + ' should contain street input, have a "Straße" label, and have a "Straße eingeben" placeholder and no errors', function () {
    cy.checkInputLabelAndPlaceholder(page.getStreetInput,page.getStreetLabel,"Straße eingeben","Straße")
    //cy.noInitialInputError(page.getStreetError)
  })

  it(pageName + ' should contain house number input, have a "Haus nummer" label, and have a "Haus nummer" placeholder and only accept positive numbers' , function () {
    cy.checkInputLabelAndPlaceholder(page.getNumberInput,page.getNumberLabel,"Hausnummer","Hausnummer")
  })

  it(pageName + ' should contain use current location button and have "Nutze aktuellen Standort " text', function () {
    cy.checkElementExistenceAndText(page.getUseCurrentLocationButton,'Nutze aktuellen Standort')
  })

  it(pageName + ' should contain a radius slider with a "Umkreis" label and respond to changes', function () {
    cy.checkSliderLabelAndFunctionality(page.getRadiusSlider,page.getRadiusSliderLabel,'Umkreis',page.getRadiusSliderValue,page.getRadiusSliderMax,'10 km',[0,5,10])
  })

  it(pageName + ' Next button should be inactive if all required fields are not touched', function(){
    cy.checkButtonDisabledStatus(page.getNextButton,'ng-reflect-disabled')
  })

  it(pageName + ' post code Input field should generate apropriate errors depending on entered value   ', function () {
    cy.postCodeInputErrorCheck(page.getPostCodeInput,page.getBody,page.getPostCodeError)
  })

  it(pageName + ' City Input field should generate apropriate errors depending on entered value   ', function () {
    cy.genericRequiredInputErrorCheck(page.getCityInput,page.getBody,page.getCityError)

  })

  /*
  it(' Next button should be inactive if all required fields are not filled', function(){
 
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
      page.getPostCodeInput().clear({ force: true })
      page.getStreetInput().clear({ force: true })
      page.getNumberInput().clear({ force: true })
      page.getCityInput().clear({ force: true })
      page.getPostCodeInput().clear({ force: true }).type(desiredResidence.postCode)
      page.getNextButton().invoke('attr','ng-reflect-disabled').should('include',true)
      page.getCityInput().clear({ force: true }).click({ force: true })
      cy.wait(300)
      page.getCityInput().should('have.value', desiredResidence.city)
      page.getStreetInput().invoke('val').should('not.be.empty')
      page.getNumberInput().invoke('val').should('not.be.empty')
      page.getStreetInput().click({force:true}).clear({ force: true }).type(desiredResidence.street, { force: true })
      page.getNumberInput().click({force:true}).clear({ force: true }).type(desiredResidence.houseNumber)
      page.getNextButton().invoke('attr','ng-reflect-disabled').should('include',false)
      //page.getNextButton().click({force:true}) does not work
      page.getNextButton().contains('Weiter').trigger('mouseover').click({force:true})
      cy.url().should('include', '/propertyPreferences')

    })
  })
}


export function selectDesiredAreaByNeighborhood() {
  before(function () {
    cy.window().then((win) => {
      win.sessionStorage.clear()
    })
    cy.visit(Cypress.env('tn_url')+'/de/auth/register/propertyLocation')
  })

  it(pageName + ' should contain Über Stadtteile radio button and should have Über Stadtteile label', function () {
    cy.checkRadioLabel(page.getSelectByDistrictRadio,'Über Stadtteile')
    page.getSelectByDistrictRadio().click({ force: true })
  })
  it(pageName + ' should contain a step 1 paragraph with a text of Schritt 1', function () {
    cy.checkElementExistenceAndText(page.getStepParagraph,'Schritt 1')
  })

  it(pageName + ' should contain a where doyou want to live header with a text of Wo möchten Sie wohnen?', function () {
    cy.checkElementExistenceAndText(page.getStepPurpose,'Wo möchten Sie wohnen?')
  })

  it(pageName + ' should contain a "use of address  message" with appropriate text text ', function () {
    cy.checkElementExistenceAndText(page.getAdressUse,'Achtung! Dies ist nicht Ihre Adresse, sondern die Adresse, an der Sie eine Wohnung suchen')
  })

  it(pageName + '  should contain a city/postcode input, a Stadt oder Plz label and a Stadt oder Plz eingeben placeholder and no errors', function () {
    cy.checkInputLabelAndPlaceholder(page.getCityOrPostCodeInput,page.getCityOrPostCodeLabel,"Stadt oder Plz eingeben","Stadt oder Plz")
    cy.checkRequiredInput(page.getCityInput,page.getCityOrPostCodeLabel,'ng-reflect-required',"*")
    cy.noInitialInputError(page.getCityOrPostCodeError)
  })


  it(pageName + ' Next button should be inactive if all required fields are not touched', function(){
    page.getNextButton().invoke('attr','ng-reflect-disabled').should('include',true)
})

  it(pageName + ' City/postCode Input field should generate apropriate errors depending on entered value', function () {
    cy.genericRequiredInputErrorCheck(page.getCityOrPostCodeInput,page.getBody,page.getCityOrPostCodeError)
  })

  it(pageName + ' City suggestion should dropdown based on enterd post code and a click should fill the input with appropriate value and be redirected to the property preference  ', function () {
    cy.fixture('registrationData').then(function (data) {
      return data.desiredResidence
    }).then(function(desiredResidence){
      page.getCityOrPostCodeInput().clear().click().type(desiredResidence.postCode)
      page.getNextButton().invoke('attr','ng-reflect-disabled').should('include',true)
      page.getCitySuggestionDropdown().invoke('attr','aria-expanded').should('eq','true')
      page.getCitySuggestionDropdown().invoke('text').should('include',desiredResidence.city)
      page.getCitySuggestionDropdownText().click()
      page.getCityOrPostCodeInput().invoke('val').should('include',desiredResidence.city)
      desiredResidence.includedDistricts.forEach((district) => {
        page.getIncludedDistricts().contains(district).should('exist')
        page.getIncludedDistricts().contains(district).click()
        page.getNextButton().invoke('attr','ng-reflect-disabled').should('include',false)
      })
      //propertyLocationPage.getNextButton().click({force:true})
      page.getNextButton().contains('Weiter').trigger('mouseover').click({force:true})
      cy.url().should('include', '/propertyPreferences')
    })
    
  })
}

