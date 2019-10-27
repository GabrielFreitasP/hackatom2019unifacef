import { SET_RANKING, LOADING_RANKING } from '../actions/actionTypes'

const initialState = {
    data: [],
    isLoading: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_RANKING:
            return {
                ...state,
                data: action.payload,
            }
        case LOADING_RANKING:
            return {
                ...state,
                isLoading: action.payload
            }
        default:
            return state
    }
}

export default reducer