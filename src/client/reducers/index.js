import {combineReducers} from 'redux'
import {reducer as form} from 'redux-form'
import menu from './menuReducer'
import sideNav from './sideNavReducer'
import user from './userReducer'
import admin from './adminReducer'

export default combineReducers({
    menu,
    sideNav,
    user,
    admin,
    form
})