import axios from 'axios'

export const FETCH_MENU = 'FETCH_MENU';

export const fetchMenu = () => async (dispatch) => {
    // const {data} = await axios.get('/api/menu');
    dispatch({
        type: FETCH_MENU,
        payload: {data: 'text'}
    })
};

export const fetchMenuServer = menu => {
    return {
        type: FETCH_MENU,
        payload: menu
    }
};