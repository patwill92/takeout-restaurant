import {FETCH_MENU, FETCH_MENU_ADMIN, FETCH_TEST_MENU,UPDATE_MENU} from "../actions/types"

export default (state = null, action) => {
    switch(action.type) {
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