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

getFirstNameError()
{
    return cy.get(':nth-child(1) > .app-form-field > .app-form-field-wrapper > .input-messages > .app-form-field-errors > .ng-star-inserted > .app-form-field-error-wrapper > .app-form-field-error')
}

getLastNameInput()
{
    return cy.get('input[ng-reflect-name="lastName"]')
}

getLastNameError()
{
    return cy.get(':nth-child(1) > :nth-child(2) > .app-form-field > .app-form-field-wrapper > .input-messages > .app-form-field-errors > .ng-star-inserted > .app-form-field-error-wrapper > .app-form-field-error')
}

getEmailInput()
{
    return cy.get('input[ng-reflect-name="email"]')
}

getEmailError()
{
    return cy.get(':nth-child(2) > :nth-child(1) > .app-form-field > .app-form-field-wrapper > .input-messages > .app-form-field-errors > .ng-star-inserted > .app-form-field-error-wrapper > .app-form-field-error')
}

getPasswordInput()
{
    return cy.get('input[ng-reflect-name="password"]')
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