import {
    SET_USER,
    REMOVE_USER,
    LOADING_USER,
} from './actionTypes'
import { setMessage } from './message'
import { _removeQRCodeAssociated } from './associatedQRCode'

const _setUser = (user) => ({
    type: SET_USER,
    payload: user
})

const _removeUser = () => ({
    type: REMOVE_USER
})

const _loading = (isLoading) => ({
    type: LOADING_USER,
    payload: isLoading
})

const _dispatchMessage = (dispatch, title, text) => {
    dispatch(_loading(false))
    dispatch(setMessage({ title, text }))
}