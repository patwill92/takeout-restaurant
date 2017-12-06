import {combineReducers} from 'redux'
import {reducer as forms} from 'redux-form'
import menu from './menuReducer'
import sideNav from './sideNavReducer'

export default combineReducers({
    menu,
    sideNav,
    forms
})