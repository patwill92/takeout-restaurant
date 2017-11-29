import {combineReducers} from 'redux'

import menu from './menuReducer'
import sideNav from './sideNavReducer'

export default combineReducers({
    menu,
    sideNav
})