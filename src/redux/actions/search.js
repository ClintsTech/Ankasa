import { GET_COUNTRY, FORM_FILL, SEARCH } from '../type/search'
import axios from 'axios'
import { URI } from '../../utils'

export const getCountry = country => {
    return {
        type: GET_COUNTRY,
        payload: country
    }
}

export const search = (data, dataform) => async dispatch => {
    dispatch(formFill(dataform))
    try {
        const res = await axios.post(`${URI}/flight/search-flight`, data)
        dispatch({ type: SEARCH, payload: res.data.data })
    } catch (error) {
        console.log(error.message)
    }
}

export const formFill = data => {
    return {
        type: FORM_FILL,
        payload: data
    }
}