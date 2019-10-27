import { SET_QUESTIONS, LOADING_QUESTIONS } from '../actions/actionTypes'

const initialState = {
    data: [],
    isLoading: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_QUESTIONS:
            return {
                ...state,
                data: action.payload,
            }
        case LOADING_QUESTIONS:
            return {
                ...state,
                isLoading: action.payload
            }
        default:
            return state
    }
}

export default reducer