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
Cypress.Commands.add("checkPresence",((arr) => {
    let presence
    return cy.get('body').then(($el) => {
        presence = arr.every((element) => {
            return $el.find(element).length > 0
        })
        return presence
    })
}))

Cypress.Commands.add("checkInputLabel",((input,label,placeholder,labelText) => {
    input().should('exist')
    label().should('exist')
    input().invoke('attr', 'placeholder').should('include', placeholder)
    label().invoke('text').should('include', labelText)
}))

Cypress.Commands.add("checkRequiredInput",((input,label,requiredAttr,requiredText) => {
    input().should('exist')
    label().should('exist')
    input().invoke('attr',requiredAttr).should('exist')
    label().invoke('text').should('include', requiredText)  
}))

Cypress.Commands.add("noInitialInputError",((error) => {
    error().should('not.exist')  
}))
