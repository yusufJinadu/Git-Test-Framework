// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })


/**
 * $ means the argument is a function
 */
Cypress.Commands.add("checkPresence",((arr) => {
    let presence
    return cy.get('body').then(($el) => {
        presence = arr.every((element) => {
            return $el.find(element).length > 0
        })
        return presence
    })
}))

Cypress.Commands.add("checkInputLabelAndPlaceholder",(($input,$label,placeholder,labelText) => {
    /**
     * checks if an input field has the correct label text and placeholder
     * $input = function to grt the input e.g page.getinput
     * $label = function to get label = page.getLabel
     * placeholder = placeholder text e.g 'street'
     * labelText = label text e.g 'street'
     */
    $input().should('exist')
    $label().should('exist')
    $input().invoke('attr', 'placeholder').should('include', placeholder)
    $label().invoke('text').should('include', labelText)
}))

Cypress.Commands.add("checkRequiredInput",(($input,$label,requiredAttr,requiredText) => {
      /**
     * checks if a required input has the required sign in its label and if it has the required attribute
     * $input = function to grt the input e.g page.getinput
     * $label = function to get label = page.getLabel
     * requiredAttr = Html attribute that shous it is required eg 'ng-required'
     * requiredText = text on label that shows it is required eg *
     */
    $input().should('exist')
    $label().should('exist')
    $input().invoke('attr',requiredAttr).should('exist')
    $label().invoke('text').should('include', requiredText)  
}))

Cypress.Commands.add("checkRadioLabel",(($radio,labelText) => {
      /**
     * checks if a radio label exists and has the correct label by using the parent element that encompasses both the radio and label
     * $radio = function to get the radio button parent div  e.g page.getradioparentdiv
     * labelText = text the radio label is supposed to have eg 'label'
     */
    $radio().should('exist')
    $radio().contains(labelText).should('exist')
}))



Cypress.Commands.add("noInitialInputError",(($error) => {
    /**
     * checks if an untouched input field does not have an error
     * $error = function to get error element e,g page.getError
     */
    $error().should('not.exist')  
}))

Cypress.Commands.add("checkElementExistenceAndText",(($element,text) => {
    /**
     * Checks if an element eg header or div exists and if it has the correct text
     * $element = function to get element e.g page.getText
     * text = text that element is supposed to have e.g 'test'
     */
    $element().should('exist')
    $element().invoke('text').should('include', text) 
}))

Cypress.Commands.add("checkSliderLabelAndFunctionality",(($slider,$label,labelText,$currentVal,$maxVal,maxVal,arr) => {
    /**
     * Checks if a certain slider exists and if it is functional
     * $slider = function to get slider e.g page.getSlider
     * $label = function to get slider label
     * labelText = text expected on slider label e.g 'radius'
     * $currentVal = function to get the current value element eg page.getSliderCurrentValue
     * $maxVal = function to get slider maximum value element e.g page.getSliderMax
     * arr = array of values to be texted any value outside sliders range gives a failed test
     */
    $slider().should('exist')
    $maxVal().should('exist')
    $maxVal().should('have.text',maxVal)
    $label().invoke('text').should('include', labelText)
    arr.forEach((number) => {
        $slider().invoke('val', number).trigger('change', { force: true })
        $currentVal().invoke('text').should('include', `${number}`)
    })
}))

Cypress.Commands.add("genericRequiredInputErrorCheck",(($input,$body,$error) => {
    /**
     * Checks a generic required input field for 'Pflichtfeld' error if it touched but empty
     * $input = function to get input = page.getInput
     * $function to get page body e.g page.getBody
     * $error = function to get Error field
     * note assumes a required error text of 'Pflichtfeld'
     */
    $input().click({force:true}).clear()
    $body().click({force:true})
    $error().should('exist')
    $error().invoke('text').should('include', 'Pflichtfeld')
    $input().clear({ force: true }).click({ force: true }).type('3')
    $error().should('not.exist')
}))

Cypress.Commands.add("postCodeInputErrorCheck",(($input,$body,$error) => {
    /**
     * Checks if a postCode input yields the correct error based on use input
     * $input = function to get input eg page.getInput
     * $body = function to get body
     * $error = function to get error field
     */
    $input().click({ force: true }).clear({ force: true })
    $body().click({force:true})
    $error().invoke('text').should('include', 'Pflichtfeld')
    $input().click({ force: true }).type('12', { force: true })
    $body().click({force:true})
    $error().invoke('text').should('include', 'Eingabe ist keine gültige Postleitzahl')
    $input().clear({ force: true }).click({ force: true }).type('123')
    $body().click({force:true})
    $error().invoke('text').should('include', 'Eingabe ist keine gültige Postleitzahl')
    $input().click({ force: true }).clear({ force: true }).type('1234')
    $body().click({ force: true })
    $error().should('not.exist')
    $input().clear({ force: true }).click({ force: true }).type('123456789')
    $body().click()
    $error().invoke('text').should('include', 'Eingabe ist keine gültige Postleitzahl')
    $input().click({ force: true }).clear({ force: true }).type('2229')
    $body().click({ force: true })
    $error().should('not.exist')
}))

Cypress.Commands.add("checkButtonDisabledStatus",(($button,attr) => {
    /**
     * checks if a button is disabled
     * $button = function to get button
     * attr = html attribute to determine if a button is required e.g ng-required
     */
    $button().invoke('attr',attr).should('include',true)
}))

Cypress.Commands.add("checkAcceptOnlyPositiveNumbers",(($input,attr) => {
    /**
     * checks if a an input acceps only numbers
     * $input = function to get input
     * attr = html attribute to determine if a button accepts only number  e.g ng-type
     */
    $input().click({ force: true }).clear({ force: true })
    $input().invoke('attr','ng-reflect-type').should('include','number')
    $input().click({force:true}).type('abcd')
    $input().invoke('val').should('eq','')
    $input().click({force:true}).type('-1')
    $input().invoke('val').should('eq','1')
}))
Cypress.Commands.add("emailInputErrorCheck",(($input,$body,$error) => {
    /**
     * Checks if a email input yields the correct error based on use input
     * $input = function to get email input eg page.getEmailInput
     * $body = function to get body
     * $error = function to get error field
     */
    $input().click({ force: true }).clear({ force: true })
    $body().click({ force: true })
    $error().should('exist')
    $error().invoke('text').should('include','Pflichtfeld!')
    $input().click({ force: true }).type('y')
    $body().click({ force: true })
    $error().should('exist')
    $error().invoke('text').should('include','Das Format entspricht keiner E-Mail-Adresse')
    $input().click().type('y@')
    $body().click({ force: true })
    $error().should('exist')
    $error().invoke('text').should('include','Das Format entspricht keiner E-Mail-Adresse')
    $input().click({ force: true }).clear().type('y@j')
    $body().click({ force: true })
    $error().should('not.exist')
}))
Cypress.Commands.add("passwordInputErrorCheck",(($input,$body,$error) => {
    /**
     * Checks if a poassword input yields the correct error based on use input
     * $input = function to get password input eg page.getPasswordInput
     * $body = function to get body
     * $error = function to get error field
     */
    $input().click({ force: true }).clear({ force: true })
    $body().click({ force: true })
    $error().should('exist')
    $error().invoke('text').should('include','Pflichtfeld!')
    $input().click({ force: true }).clear().type('1')
    $error().invoke('text').should('include','Wert zu kurz')
    $input().click().clear({ force: true }).type('1234')
    $error().invoke('text').should('include','Wert zu kurz')
    $input().click().clear({ force: true }).type('123456')
    $error().invoke('text').should('include','Wert zu kurz')
    $input().click().clear({ force: true }).type('1234567')
    $error().should('not.exist')
}))

