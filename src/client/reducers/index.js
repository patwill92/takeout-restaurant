import {combineReducers} from 'redux'
import {reducer as form} from 'redux-form'
import menu from './menuReducer'
import sideNav from './sideNavReducer'
import user from './userReducer'

export default combineReducers({
    menu,
    sideNav,
    user,
    form
})