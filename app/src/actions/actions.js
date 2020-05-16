import axios from 'axios';

export const FETCH_HOUSES_START = 'FETCH_HOUSES_START';
export const FETCH_HOUSES_SUCCESS = 'FETCH_HOUSES_SUCCESS'
export const FETCH_HOUSES_FAIL = 'FETCH_HOUSES_FAIL'



export const getHouses = () => dispatch => {
    dispatch({ type: FETCH_HOUSES_START})
    axios
        .get('https://anapioficeandfire.com/api/houses/')
        .then(response =>
            dispatch({type: FETCH_HOUSES_SUCCESS, payload: response.data}))
            //console.log(FETCH_HOUSES_SUCCESS.payload)
        .catch(error => dispatch({ type: FETCH_HOUSES_FAIL, payload: error}))
        
}

console.log(FETCH_HOUSES_SUCCESS.payload)