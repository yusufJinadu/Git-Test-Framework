/// <reference types="cypress" />
import RegisterViaGooglePage from '../../../support/page-objects/registration/registerViaGooglePage'
const pageName = 'register via google'
export function registerViaGoogle() {
    const registerViaGooglePage = new RegisterViaGooglePage()
    it(pageName + 'page should contain a step 3 paragraph with a text of Schritt 3', function () {
    
      })
 
  }