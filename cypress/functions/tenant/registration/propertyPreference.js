/// <reference types="cypress" />
import PropertyPreferencePage from '../../../support/page-objects/registration/propertyPreferencePage'
const pageName = 'property preference page '
export function selectPreferedProperty() {
    const propertyPreferencePage = new PropertyPreferencePage()
    it(pageName + ' should contain a step 2 paragraph with a text of Schritt 2', function () {
        propertyPreferencePage.getStepParagraph().should('exist')
        propertyPreferencePage.getStepParagraph().invoke('text').should('include', 'Schritt 2')
      })

      it(pageName + ' should contain a apartment details header with a text of Wohnungsdetails?', function () {
        propertyPreferencePage.getStepPurpose().should('exist')
        propertyPreferencePage.getStepPurpose().invoke('text').should('eq', 'Wohnungsdetails')
      })

      it(pageName + ' should contain a maximum price input with a Maximaler Mietpreis (warm) label should be required, only accept numbers and a Bsp:500 placeholder', function () {
        //propertyPreferencePage.getRentalPriceLabel().invoke('text').should('include','Maximaler Mietpreis (warm)') label not stable
        //propertyPreferencePage.getRentalPriceLabel().invoke('text').should('include','*') label not stable
        propertyPreferencePage.getRentalPriceInput().invoke('attr','placeholder').should('include','Bsp.: 500')
        propertyPreferencePage.getRentalPriceInput().invoke('attr','ng-reflect-type').should('include','number')
        propertyPreferencePage.getRentalPriceInput().invoke('attr','ng-reflect-required').should('exist')
      })

      it(pageName + 'maximum price input should yield appropriate errors depending on user input ', function () {
        propertyPreferencePage.getRentalPriceInput().click({force:true})
        propertyPreferencePage.getBody().click({force:true})
        propertyPreferencePage.getRentalPriceError().should('exist')
        propertyPreferencePage.getRentalPriceError().invoke('text').should('include','Pflichtfeld!')
        propertyPreferencePage.getRentalPriceInput().click({force:true}).type('2')
        propertyPreferencePage.getRentalPriceError().should('not.exist')
        propertyPreferencePage.getRentalPriceInput().clear()
        
      })

      it(pageName + ' should contain a minimum living space input with a Wohnfläche (min.) label should be required, only accept numbers and a Bsp.: 60 placeholder', function () {
        //propertyPreferencePage.getLivingSpaceLabel().invoke('text').should('include','Maximaler Mietpreis (warm)') label not stable
        //propertyPreferencePage.getLivingSpaceLabel().invoke('text').should('include','*') label not stable
        propertyPreferencePage.getLivingSpaceInput().invoke('attr','placeholder').should('include','Bsp.: 60')
        propertyPreferencePage.getLivingSpaceInput().invoke('attr','ng-reflect-type').should('include','number')
        propertyPreferencePage.getRentalPriceInput().invoke('attr','ng-reflect-required').should('exist')
      })


      it(pageName + 'minimum living space input should yield appropriate errors depending on user input', function () {
        //propertyPreferencePage.getLivingSpaceLabel().invoke('text').should('include','Maximaler Mietpreis (warm)') label not stable
        //propertyPreferencePage.getLivingSpaceLabel().invoke('text').should('include','*') label not stable
        propertyPreferencePage.getLivingSpaceInput().click({force:true})
        propertyPreferencePage.getBody().click({force:true})
        propertyPreferencePage.getLivingSpaceError().should('exist')
        propertyPreferencePage.getLivingSpaceError().invoke('text').should('include','Pflichtfeld!')
        propertyPreferencePage.getLivingSpaceInput().click({force:true}).type('2')
        propertyPreferencePage.getLivingSpaceError().should('not.exist')
        propertyPreferencePage.getLivingSpaceInput().clear()
      })

   
      it(pageName + ' should contain a panel with tabs for choosing minimum number of rooms ', function () {
        //propertyPreferencePage.getLivingSpaceLabel().invoke('text').should('include','Maximaler Mietpreis (warm)') label not stable
        //propertyPreferencePage.getLivingSpaceLabel().invoke('text').should('include','*') label not stable
        propertyPreferencePage.getMinNumberOfRoomsTabs().contains('1').should('exist')
        propertyPreferencePage.getMinNumberOfRoomsTabs().contains('2').should('exist')
        propertyPreferencePage.getMinNumberOfRoomsTabs().contains('3').should('exist')
        propertyPreferencePage.getMinNumberOfRoomsTabs().contains('4+').should('exist')
        //propertyPreferencePage.getLivingSpaceInput().invoke('attr','ng-reflect-type').should('include','number')
        //propertyPreferencePage.getRentalPriceInput().invoke('attr','ng-reflect-required').should('exist')
      })

      it(pageName + ' should contain an Earliest available date input with appropriate label and dd.mm.yyyy placeholder', function () {
        //propertyPreferencePage.getEarliestAvailableInput().invoke('text').should('include','Maximaler Mietpreis (warm)') label not stable
        //propertyPreferencePage.getEarliestAvailableInput().invoke('text').should('include','*') label not stable
        propertyPreferencePage.getEarliestAvailableInput().should('exist')
        propertyPreferencePage.getEarliestAvailableInput().invoke('attr','placeholder').should('include','dd.mm.yyyy')
      })

      it(pageName + 'User should be able to select their propert preference and move to Register Account ', function () {
        cy.fixture('registrationData').then(function (data) {
            return data.desiredProperty
          }).then(function (desiredProperty) {
            propertyPreferencePage.getRentalPriceInput().click({force:true}).clear().type(desiredProperty.maxPrice)
            propertyPreferencePage.getNextButton().invoke('attr','ng-reflect-disabled').should('include',true)
            propertyPreferencePage.getLivingSpaceInput().click({force:true}).clear().type(desiredProperty.maxPrice)
            propertyPreferencePage.getNextButton().invoke('attr','ng-reflect-disabled').should('include',true)
            propertyPreferencePage.getMinNumberOfRoomsTabs().contains(desiredProperty.minNumberOfRooms).click()
            propertyPreferencePage.getNextButton().invoke('attr','ng-reflect-disabled').should('include',false)
            propertyPreferencePage.getCalenderButton().click()
            propertyPreferencePage.getCalender().should('exist')
            propertyPreferencePage.getCalenderCurrentDate().first().click()
            const todaysDate = Cypress.moment().format('DD.MM.YYYY')
            propertyPreferencePage.getEarliestAvailableInput().invoke('val').should('include',todaysDate)
            propertyPreferencePage.getNextButton().click()
            cy.url().should('include', '/registerAccount')


          })
      })
      
   
  }