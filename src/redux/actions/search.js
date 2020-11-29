import { GET_COUNTRY, FORM_FILL } from '../type/search'

export const getCountry = country => {
    return {
        type: GET_COUNTRY,
        payload: country
    }
}

export const formFill = data => async dispatch => {
    
}