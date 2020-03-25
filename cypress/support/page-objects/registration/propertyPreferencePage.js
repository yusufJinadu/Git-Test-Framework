export default class PropertyPreferencePage{

    getBody(){
        return cy.get('body')
    }

    getStepParagraph(){
        return cy.get('.register__content p.content__sub-title')
    }
    
    getStepPurpose(){
        return cy.get('.register__content h2.content__title')
    }

    getStepPurpose(){
        return cy.get('.register__content h2.content__title')
    }

    getRentalPriceInput(){
        return cy.get('input[ng-reflect-name="upperBoundRent"]')
    }

    getRentalPriceLabel(){
        return cy.get('label[for="app-input-5"]')
    }

    getRentalPriceError(){
        return cy.get(':nth-child(1) > .app-form-field > .app-form-field-wrapper > .input-messages > .app-form-field-errors > .ng-star-inserted > .app-form-field-error-wrapper > .app-form-field-error')
    }

    getLivingSpaceError(){
        return cy.get(':nth-child(2) > .app-form-field > .app-form-field-wrapper > .input-messages > .app-form-field-errors > .ng-star-inserted > .app-form-field-error-wrapper > .app-form-field-error')
    }

    getLivingSpaceInput(){
        return cy.get('input[ng-reflect-name="lowerBoundSize"]')
    }

    getMinNumberOfRoomsPanel(){
        return cy.get('.flat-select__container')
    }

    getMinNumberOfRoomsTabs(){
        return cy.get('.flat-select__container .flat-select__item-label')
    }

    getEarliestAvailableInput(){
        return cy.get('input[ng-reflect-name="dp"]')
    }

    /*
    getCurrency(){

    }
    */

     /*
    getUnit(){

    }
    */

   getCalenderButton()
   {
       return cy.get('.date__container app-button button img')
   }

   getCalender()
   {
       return cy.get('ngb-datepicker')
   }
   getCalenderCurrentDate()
   {
       return cy.get('ngb-datepicker .ngb-dp-day .ng-star-inserted[ng-reflect-disabled="false"]')
   }

   getNextButton()
    {
    return cy.get('app-button#next-btn')
    }
}