import {FETCH_MENU, FETCH_MENU_ADMIN, FETCH_TEST_MENU} from "../actions/types"

export default (state = {}, action) => {
    switch(action.type) {
        case FETCH_MENU:
            return {
                ...state,
                clientMenu: action.payload
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