import {FETCH_MENU, FETCH_MENU_ADMIN} from "../actions/index"

export default (state = {}, action) => {
    switch(action.type) {
        case FETCH_MENU:
            return action.payload;
        case FETCH_MENU_ADMIN:
            return action.payload;
        default:
            return state;
    }
}