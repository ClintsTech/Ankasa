import { GET_NOTIFICATIONS, CLEAR_NOTIFICATIONS, READ_NOTIFICATION } from '../type/notification'

const initialState = {
    dataNotification: [],
    messageClear: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_NOTIFICATIONS:
            return {
                ...state,
                dataNotification: action.payload
            }
        case CLEAR_NOTIFICATIONS:
            return {
                ...state,
                messageClear: 'Success Clear Notification'
            }
        default:
            return state
    }
}