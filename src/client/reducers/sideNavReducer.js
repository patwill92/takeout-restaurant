import {TOGGLE_SIDE_NAV} from "../actions/types"

export default (state = {}, action) => {
    switch (action.type) {
        case TOGGLE_SIDE_NAV:
            return action.payload;
        default:
            return state;
    }
}