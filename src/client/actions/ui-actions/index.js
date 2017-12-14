import {TOGGLE_SIDE_NAV, FETCH_ADMIN_TAB} from "../types";

export const toggleSideNav = payload => {
    return {
        type: TOGGLE_SIDE_NAV,
        payload
    }
};

export const fetchAdminTab = req => {
    return {
        type: FETCH_ADMIN_TAB,
        payload: req.dispatchData ? req.dispatchData : req
    }
};