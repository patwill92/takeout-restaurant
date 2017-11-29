import axios from 'axios'

import {FETCH_MENU_ADMIN, FETCH_MENU, TOGGLE_SIDE_NAV} from "./types";

export const fetchMenu = () => async (dispatch) => {
    const {data} = await axios.get('/api/menu');
    dispatch({
        type: FETCH_MENU,
        payload: data
    })
};

export const fetchMenuServer = menu => {
    return {
        type: FETCH_MENU,
        payload: menu
    }
};

export const fetchMenuAdminServer = menu => {
    return {
        type: FETCH_MENU_ADMIN,
        payload: menu
    }
};

export const toggleSideNav = payload => {
    return {
        type: TOGGLE_SIDE_NAV,
        payload
    }
};