import { GET_COUNTRY, FORM_FILL, SEARCH, SEARCH_FAILED } from '../type/search'

const initialState = {
    country: '',
    data: [],
    dataForm: {}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_COUNTRY:
            return {
                ...state,
                country: action.payload
            }
        case SEARCH:
            return {
                ...state,
                data: action.payload
            }
        case SEARCH_FAILED:
            return {
                ...state,
                data: [],
                message: 'Flight Not Found'
            }
        case FORM_FILL:
            return {
                ...state,
                dataForm: action.payload
            }
        default:
            return state
    }
}