import {GET_USER} from "../actions/types";

export default (state = {}, action) => {
    switch (action.type) {
        case GET_USER:
            return action.payload || false;
        case 'TESTING':
        		return {...state,newProps:true}
    }
    return state;
}