/// <reference types="cypress" />
import {ssoLogin_func} from '../../../../functions/landlord/login/login'
describe('Enter username and password and get redirected to the application', function() {
    Cypress.config({ "chromeWebSecurity": false})
    before(function () {
        cy.visit("https://sso.stg.immomio.com/auth/realms/immomio-stg/protocol/openid-connect/auth?client_id=immomio-oidc&redirect_uri=http%3A%2F%2Fapp.stg.immomio.com%2Fauth%3FpathAfterAuth%3Dproperties&nonce=6e139c74-20f0-4bbc-8258-dba4f0dc438c&state=6e139c74-20f0-4bbc-8258-dba4f0dc438c&response_type=id_token+token&response_mode=fragment&scope=openid&kc_idp_hint=immomio&login_hint=yjinadu%2Blarryking%40immomio.de")

    })
   
    ssoLogin_func()
   
  })