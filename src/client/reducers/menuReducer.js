import {FETCH_MENU, FETCH_MENU_ADMIN} from "../actions/index"

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
        default:
            return state;
    }
}