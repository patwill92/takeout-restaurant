import {SET_TIMEOUT} from "../actions/types"
const initialState={timeout:null,interval:null}
export default (state=initialState, action) => {
    switch (action.type) {
        case SET_TIMEOUT:
            return {...state,...action.payload};
    }
    return state
}