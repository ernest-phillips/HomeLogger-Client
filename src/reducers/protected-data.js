    
import {
    FETCH_PROTECTED_DATA_SUCCESS,
    FETCH_PROTECTED_DATA_ERROR
} from '../actions/protected-data';

const initialState = {
    data: '',
    error: null
};

export default function reducer(state = initialState, action) {
    
    if (action.type === FETCH_PROTECTED_DATA_SUCCESS) {
        console.log("Fetched protected Success")
        return Object.assign({}, state, {
            data: action.data,
            error: null
        });
    } else if (action.type === FETCH_PROTECTED_DATA_ERROR) {
        console.log("Fetched protected Failure")
        return Object.assign({}, state, {
            error: action.error
        });
    }
    return state;
}