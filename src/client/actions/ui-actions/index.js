import {TOGGLE_SIDE_NAV, FETCH_ADMIN_TAB, FETCH_ADMIN_SUB_NAV, FETCH_ADMIN_ACTIVE_SUB_NAV} from "../types";

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

export const fetchAdminSubNav = req => {
    return {
        type: FETCH_ADMIN_SUB_NAV,
        payload: req.dispatchData ? req.dispatchData : req
    }
};

export const fetchAdminActiveSubNav = req => {
    return {
        type: FETCH_ADMIN_ACTIVE_SUB_NAV,
        payload: req.dispatchData ? req.dispatchData : req
    }
};