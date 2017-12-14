import {FETCH_ADMIN_TAB} from "../actions/types"

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_ADMIN_TAB:
            return {
                ...state,
                tab: action.payload
            };
        default:
            return state;
    }
}