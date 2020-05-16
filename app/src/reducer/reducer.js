import {
    FETCH_HOUSES_START,
    FETCH_HOUSES_SUCCESS,
    FETCH_HOUSES_FAIL
} from '../actions/actions.js'

console.log(FETCH_HOUSES_SUCCESS.payload)



const initialState = {
    houses: [],
    error: '',
    isFetching: false
};


export const reducer = (state = initialState, action) => {
    console.log('reducer', action);
    switch(action.type) {
        case FETCH_HOUSES_START:
            return {
                ...state,
                isFetching: true,
                error: ''
            };
            case FETCH_HOUSES_SUCCESS:
                return {
                    ...state,
                    houses:action.payload,
                    isFetching:false,
                    error:''
                };
            case FETCH_HOUSES_FAIL:
                return {
                    ...state,
                    error: action.payload
                };
                default:
                    return state;
    }
}

export default reducer 