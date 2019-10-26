import {
    SET_TRANSLATOR,
    REMOVE_TRANSLATOR,
    LOADING_TRANSLATOR,
} from '../actions/actionTypes'

const initialState = {
    text : null,
    url: null,
    isLoading: false,
}

const reducer = (state = initialState, action) => {    
    switch (action.type) {
        case SET_TRANSLATOR:
            return {
                ...state,
                text: action.payload.text,
                url: action.payload.url,
            }
        case REMOVE_TRANSLATOR:
            return {
                ...initialState
            }
        case LOADING_TRANSLATOR:
            return {
                ...state,
                isLoading: action.payload
            }
        default:
            return state
    }
}

export default reducer