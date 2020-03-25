export default class RegisterAccountPage
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

getFirstNameInput()
{
    return cy.get('input[ng-reflect-name="firstName"]')
}

getFirstNameLabel()
{
    return cy.get(':nth-child(1) > :nth-child(1) > .app-form-field > .app-form-field-wrapper > .app-input-label-wrapper > app-form-field-label.ng-star-inserted > .app-label')
}

getFirstNameError()
{
    return cy.get(':nth-child(1) > .app-form-field > .app-form-field-wrapper > .input-messages > .app-form-field-errors > .ng-star-inserted > .app-form-field-error-wrapper > .app-form-field-error')
}

getLastNameInput()
{
    return cy.get('input[ng-reflect-name="lastName"]')
}

getLastNameLabel()
{
    return cy.get(':nth-child(1) > :nth-child(2) > .app-form-field > .app-form-field-wrapper > .app-input-label-wrapper > app-form-field-label.ng-star-inserted > .app-label')
}

getLastNameError()
{
    return cy.get(':nth-child(1) > :nth-child(2) > .app-form-field > .app-form-field-wrapper > .input-messages > .app-form-field-errors > .ng-star-inserted > .app-form-field-error-wrapper > .app-form-field-error')
}

getEmailInput()
{
    return cy.get('input[ng-reflect-name="email"]')
}

getEmailLabel()
{
    return cy.get(':nth-child(2) > :nth-child(1) > .app-form-field > .app-form-field-wrapper > .app-input-label-wrapper > app-form-field-label.ng-star-inserted > .app-label')
}

getEmailError()
{
    return cy.get(':nth-child(2) > :nth-child(1) > .app-form-field > .app-form-field-wrapper > .input-messages > .app-form-field-errors > .ng-star-inserted > .app-form-field-error-wrapper > .app-form-field-error')
}

getPasswordInput()
{
    return cy.get('input[ng-reflect-name="password"]')
}

getPasswordLabel()
{
    return cy.get(':nth-child(2) > :nth-child(2) > .app-form-field > .app-form-field-wrapper > .app-input-label-wrapper > app-form-field-label.ng-star-inserted > .app-label')
}

getPasswordError()
{
    return cy.get(':nth-child(2) > :nth-child(2) > .app-form-field > .app-form-field-wrapper > .input-messages > .app-form-field-errors > .ng-star-inserted > .app-form-field-error-wrapper > .app-form-field-error')
}

getPolicyCheckBox()
{
    return cy.get('app-checkbox[ng-reflect-name="acceptPolicies"]')
}

getTermsOfUseLink()
{
    return cy.get('app-checkbox[ng-reflect-name="acceptPolicies"] + a')
}



getFinishButton()
{
    return cy.get('app-button#save-btn')
}


}