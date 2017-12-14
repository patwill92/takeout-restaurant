import {FETCH_MENU, FETCH_MENU_ADMIN, FETCH_TEST_MENU,UPDATE_MENU} from "../actions/types"

<<<<<<< HEAD
export default (state = null, action) => {
    switch(action.type) {
=======
export default (state = {}, action) => {
    switch (action.type) {
>>>>>>> 8ad76a5940e888d9797429cc085df551af2ccacc
        case FETCH_MENU:
            return {
                ...state,
                clientMenu: action.payload
            };
        case UPDATE_MENU:
            return {
                ...state,
                ...action.payload
            };
        case FETCH_MENU_ADMIN:
            return {
                ...state,
                adminMenu: action.payload
            };
        case FETCH_TEST_MENU:
            return {
                ...state,
                testMenu: action.payload
            };
        default:
            return state;
    }
}