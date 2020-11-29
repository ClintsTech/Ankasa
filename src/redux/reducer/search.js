import { GET_COUNTRY } from '../type/search'

const initialState = {
    country: '',
    data: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_COUNTRY:
            return {
                ...state,
                country: action.payload
            }
        default:
            return state
    }
}