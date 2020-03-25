export default class PropertyLocationPage
{
getBody(){
    return cy.get('body')
}
getStepParagraph(){
    return cy.get('.register__content p.content__sub-title')
}

getStepPurpose(){
    return cy.get('.register__content h2.content__title')
}

getStepPurposeWarning(){
    return cy.get('.register__content p.uppercase-m.semibold:nth-child(3)')
}

getEmptyStreetWarning(){
    return cy.get('.empty-street__message')
}

getSelectByAddressRadio()
{
    return cy.get('app-radio-button[ng-reflect-value="RADIUS"]')
}

getSelectByDistrictRadio()
{
    return cy.get('app-radio-button[ng-reflect-value="DISTRICT"] label')
}

getPostCodeInput()
{
    return cy.get('input[ng-reflect-name="zipCode"]')
}
getPostCodeLabel()
{
    return cy.get('label[for="app-input-1"]')
}

getPostCodeError()
{
    return cy.get(':nth-child(1) > .inline > .app-form-field-wrapper > .input-messages > .app-form-field-errors > .ng-star-inserted > .app-form-field-error-wrapper > .app-form-field-error')
}


getCityInput()
{
    return cy.get('input[ng-reflect-name="city"]')
}

getCityLabel()
{
    return cy.get('label[for="app-input-2"]')
}

getCityError()
{
    return cy.get(':nth-child(2) > .inline > .app-form-field-wrapper > .input-messages > .app-form-field-errors > .ng-star-inserted > .app-form-field-error-wrapper > .app-form-field-error')
    
}


getCityOrPostCodeInput()
{
    return cy.get('.autocomplete.dropdown input[ng-reflect-name="city"]')
}

getCityOrPostCodeLabel()
{
    return cy.get('label[for="app-input-5"]')
}

getCityOrPostCodeWarning()
{
    return cy.get('.input-messages .app-form-field-error')
}

getCitySuggestionDropdown()
{
    return cy.get('.autocomplete__item')
}

getCitySuggestionDropdownText()
{
    return cy.get('.autocomplete__item span')
}

getIncludedDistricts()
{
    return cy.get('.register__districts-container')
}

getStreetInput()
{
    return cy.get('input[ng-reflect-name="street"]')
}
getStreetLabel()
{
    return cy.get('label[for="app-input-3"]')
}

getNumberInput()
{
    return cy.get('input[ng-reflect-name="houseNumber"]')
}

getRequiredInputs()
{
    return cy.get('input[ng-reflect-required = "true"]')
}

getUseCurrentLocationButton()
{
    return cy.get('div.location-button__container app-button.blue-ghost button.btn')
}

getRadiusSlider()
{
    return cy.get('div.slider__input-container input.slider__input')
}

getRadiusSliderValue()
{
    return cy.get('div.slider__labels div.slider__min')
}

getRadiusSliderMax()
{
    return cy.get('div.slider__max')
}

getNextButton()
{
    return cy.get('app-button#next-btn')
}


}