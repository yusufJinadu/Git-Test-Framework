/// <reference types="cypress" />
import {selectDesiredAreaByAddress_ui_func, selectDesiredAreaByNeighborhood_ui_func} from '../../../../functions/tenant/registration/propertyLocation'
import {selectPreferedProperty_ui_func} from '../../../../functions/tenant/registration/propertyPreference'
import {registerAccount_ui_func} from '../../../../functions/tenant/registration/registerAccount'
import {registerViaGoogle} from '../../../../functions/tenant/registration/registerViaGoogle'

  describe('Enter where would you like to live via address,enter prefered property, enter personal details and complete signup', function() {
    selectDesiredAreaByAddress_ui_func()
    selectPreferedProperty_ui_func()
    registerAccount_ui_func()
  })


  describe('Enter where would you like to live via neighborhood ,enter prefered property, enter personal details and complete signup', function() {
    selectDesiredAreaByNeighborhood_ui_func()
    selectPreferedProperty_ui_func()
    registerAccount_ui_func()
  })
  

  /*
  describe('Enter where would you like to live via address,enter prefered property, enter personal details and complete signup via facebook', function() {
    selectDesiredAreaByAddress()
    selectPreferedProperty()
    registerViaGoogle()
  })
  */










