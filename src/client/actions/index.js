import axios from 'axios'

export const FETCH_MENU = 'FETCH_MENU';
export const FETCH_MENU_ADMIN = 'FETCH_MENU_ADMIN';

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