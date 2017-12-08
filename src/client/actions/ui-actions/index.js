import {TOGGLE_SIDE_NAV} from "../types";

export const toggleSideNav = payload => {
    return {
        type: TOGGLE_SIDE_NAV,
        payload
    }
};