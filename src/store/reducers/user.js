import {
    SET_USER,
    REMOVE_USER,
    LOADING_USER,
} from '../actions/actionTypes'

const initialState = {
    id : null,
    name: null,
    email: null,
    password: null,
    isLoading: false,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                id: action.payload.id,
                name: action.payload.name,
                email: action.payload.email,
                password: action.payload.password
            }
        case REMOVE_USER:
            return {
                ...initialState
            }
        case LOADING_USER:
            return {
                ...state,
                isLoading: action.payload
            }
        default:
            return state
    }
}

export default reducer