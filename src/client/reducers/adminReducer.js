import {FETCH_ADMIN_TAB, FETCH_ADMIN_SUB_NAV, FETCH_ADMIN_ACTIVE_SUB_NAV} from "../actions/types"

const getSubNav = payload => {
    switch(payload) {
        case 'users': return ['users', 'comments', 'send info'];
        case 'activity': return ['orders', 'comments', 'visits'];
        case 'menu': return ['menus', 'add item', 'edit item', 'settings'];
        case 'settings': return ['website', 'menu', 'users', 'orders'];
        default: return '';
    }
};

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_ADMIN_TAB:
            return {
                ...state,
                tab: action.payload
            };
        case FETCH_ADMIN_SUB_NAV:
            return {
                ...state,
                subNav: getSubNav(action.payload)
            };
        case FETCH_ADMIN_ACTIVE_SUB_NAV:
            return {
                ...state,
                activeSubNav: action.payload
            };
        default:
            return state;
    }
}

