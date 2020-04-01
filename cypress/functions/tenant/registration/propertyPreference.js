/// <reference types="cypress" />
import PropertyPreferencePage from '../../../support/page-objects/tenant/registration/propertyPreferencePage'
const pageName = 'property preference page '
const page = new PropertyPreferencePage()
export function selectPreferedProperty_ui_func() {
    
    
      it(pageName + ' should contain a step 1 paragraph with a text of Schritt 2', function () {
        cy.checkElementExistenceAndText(page.getStepParagraph,'Schritt 2')
      })

      it(pageName + ' should contain a apartment details header  header with a text of Wohnungsdetails', function () {
        cy.checkElementExistenceAndText(page.getStepPurpose,'Wohnungsdetails')
      })

      it(pageName + 'should contain a maximum price input with a Maximaler Mietpreis (warm) label should be required, only accept numbers, a "€" unit and a Bsp:500 placeholder', function () {
        cy.noInitialInputError(page.getRentalPriceError)
        cy.checkInputLabelAndPlaceholder(page.getRentalPriceInput,page.getRentalPriceLabel,"Bsp.: 500","Maximaler Mietpreis (warm)")
        cy.checkRequiredInput(page.getRentalPriceInput,page.getRentalPriceLabel,'ng-reflect-required',"*")
        cy.checkAcceptOnlyPositiveNumbers(page.getRentalPriceInput,'ng-reflect-type')
        cy.checkElementExistenceAndText(page.getRentalPriceUnit,'€')
      })


      it(pageName + 'maximum price input should yield appropriate errors depending on user input ', function () {
        cy.genericRequiredInputErrorCheck(page.getRentalPriceInput,page.getBody,page.getRentalPriceError)    
      })

      it(pageName + 'should contain a minimum living space input with a Wohnfläche (min.) label should be required, only accept numbers have a "m" unit and a Bsp.: 60 placeholder', function () {
        cy.noInitialInputError(page.getLivingSpaceError)
        cy.checkInputLabelAndPlaceholder(page.getLivingSpaceInput,page.getLivingSpaceLabel,"Bsp.: 60","Wohnfläche (min.)")
        cy.checkRequiredInput(page.getLivingSpaceInput,page.getLivingSpaceLabel,'ng-reflect-required',"*")
        cy.checkAcceptOnlyPositiveNumbers(page.getLivingSpaceInput,'ng-reflect-type')
        cy.checkElementExistenceAndText(page.getLivingSpaceUnit,'m')
  
      })

      it(pageName + 'minimum living space input should yield appropriate errors depending on user input', function () {
        cy.genericRequiredInputErrorCheck(page.getLivingSpaceInput,page.getBody,page.getLivingSpaceError)
       
      })

   
      it(pageName + ' should contain a panel with tabs for choosing minimum number of rooms ', function () {
        page.getMinNumberOfRoomsTabs().contains('1').should('exist')
        page.getMinNumberOfRoomsTabs().contains('2').should('exist')
        page.getMinNumberOfRoomsTabs().contains('3').should('exist')
        page.getMinNumberOfRoomsTabs().contains('4+').should('exist')
      })

      it(pageName + ' should contain an Earliest available date input with appropriate label and dd.mm.yyyy placeholder', function () {
        cy.checkInputLabelAndPlaceholder(page.getEarliestAvailableInput,page.getEarliestAvailableLabel,"dd.mm.yyyy","Frühestes Einzugsdatum")
    
      })

      it(pageName + 'User should be able to select their propert preference and move to Register Account ', function () {
        cy.fixture('registrationData').then(function (data) {
            return data.desiredProperty
          }).then(function (desiredProperty) {
            page.getRentalPriceInput().click({force:true}).clear().type(desiredProperty.maxPrice)
            page.getNextButton().invoke('attr','ng-reflect-disabled').should('include',true)
            page.getLivingSpaceInput().click({force:true}).clear().type(desiredProperty.maxPrice)
            page.getNextButton().invoke('attr','ng-reflect-disabled').should('include',true)
            page.getMinNumberOfRoomsTabs().contains(desiredProperty.minNumberOfRooms).click()
            page.getNextButton().invoke('attr','ng-reflect-disabled').should('include',false)
            page.getCalenderButton().click()
            page.getCalender().should('exist')
            page.getCalenderCurrentDate().first().click({force:true})
            const todaysDate = Cypress.moment().format('DD.MM.YYYY')
            page.getEarliestAvailableInput().invoke('val').should('include',todaysDate)
            page.getNextButton().click()
            cy.url().should('include', '/registerAccount')
          })
      })
      
   
  }

  export function selectPreferedProperty_func() {
    it(pageName + 'User should be able to select their propert preference and move to Register Account ', function () {
      cy.fixture('registrationData').then(function (data) {
          return data.desiredProperty
        }).then(function (desiredProperty) {
          page.getRentalPriceInput().click({force:true}).clear().type(desiredProperty.maxPrice)
          page.getNextButton().invoke('attr','ng-reflect-disabled').should('include',true)
          page.getLivingSpaceInput().click({force:true}).clear().type(desiredProperty.maxPrice)
          page.getNextButton().invoke('attr','ng-reflect-disabled').should('include',true)
          page.getMinNumberOfRoomsTabs().contains(desiredProperty.minNumberOfRooms).click()
          page.getNextButton().invoke('attr','ng-reflect-disabled').should('include',false)
          page.getCalenderButton().click()
          page.getCalender().should('exist')
          page.getCalenderCurrentDate().first().click({force:true})
          const todaysDate = Cypress.moment().format('DD.MM.YYYY')
          page.getEarliestAvailableInput().invoke('val').should('include',todaysDate)
          page.getNextButton().click()
          cy.url().should('include', '/registerAccount')
        })
    })
    
 
}