export default class LoginPage{
    getBody(){
        return cy.get('body')
    }
    getStgStepParagraph(){
        return cy.get('.login-page__subtitle')
    }
    getStgEmailLabel(){
        return cy.get('label[for="app-input-1"]')
    }
    getStgEmailInput(){
        return cy.get('input[ng-reflect-name="email"]')
    }
    getStgLoginButton(){
        return cy.get('app-button .btn')
    }
    getStgNotRegisteredLink(){
        return cy.get('a[routerLink="/register"]')
    }

}