/// <reference types="cypress" />
import {selectDesiredAreaByAddress, selectDesiredAreaByNeighborhood} from '../../../../functions/tenant/registration/propertyLocation'
import {selectPreferedProperty} from '../../../../functions/tenant/registration/propertyPreference'
import {registerAccount} from '../../../../functions/tenant/registration/registerAccount'
import {registerViaGoogle} from '../../../../functions/tenant/registration/registerViaGoogle'

  describe('Enter where would you like to live via address,enter prefered property, enter personal details and complete signup', function() {
    selectDesiredAreaByAddress()
    selectPreferedProperty()
    registerAccount()
  })


  describe('Enter where would you like to live via neighborhood ,enter prefered property, enter personal details and complete signup', function() {
    selectDesiredAreaByNeighborhood()
    /*
    selectPreferedProperty()
    registerAccount()
    */
  })
  

  /*
  describe('Enter where would you like to live via address,enter prefered property, enter personal details and complete signup via facebook', function() {
    selectDesiredAreaByAddress()
    selectPreferedProperty()
    registerViaGoogle()
  })
  */










