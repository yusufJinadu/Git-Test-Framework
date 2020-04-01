export default class LoginPage{
    getBody(){
        return cy.get('body')
    }
    getImmomioLogo(){
        return cy.get('.logo-container img')
    }
    getSsoImmomioLogo(){
        return cy.get('.logo-container svg')
    }
    getWelcomeParagraph(){
        return cy.get('p.login-page__subtitle')
    }
    getPurposeParagraph(){
        return cy.get('h2.login-page__title')
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
    getStgNotRegisteredText(){
        return cy.get('.highlighted-background')
    }
    getRegistrationRedirectionLink(){
        return cy.get('a[routerLink="/register"]')
    }
    getSsoUsernameInput(){
        return cy.get('input[name="username"]')
    }

    getSsoUsernameLabel(){
        return cy.get('label[for="username"]')
    }
    getSsoPasswordInput(){
        return cy.get('input[name="password"]')
    }
    getSsoPasswordLabel(){
        return cy.get('label[for="password"]')
    }

    getForgotPasswordLandlordLink(){
        return cy.get('a[href="http://app.itg.immomio.com/de/reset-password/request-reset"]')
    }

    getForgotPasswordApplicantLink(){
        return cy.get('a[href="http://tenant.itg.immomio.com/de/auth/reset-password/request-reset"]')
    }

    getSsoLoginButton(){
        return cy.get('input[name="login"]')
    }

}