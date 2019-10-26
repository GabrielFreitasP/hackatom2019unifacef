import {
    SET_USER,
    REMOVE_USER,
    LOADING_USER,
} from './actionTypes'
import axios from 'axios'
import { setMessage } from './message'

const URL_BASE = 'http://10.0.4.115:8081/api/v1'

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

export const login = loginData => async dispatch => {
    dispatch(loading(true))
    
    axios.post(`${URL_BASE}/login`, {
        email: loginData.email,
        password: loginData.password
    })
        .then(({ data }) => {
            dispatch(_setUser(data))
            dispatch(_loading(false))
        })
        .catch(err => {
            dispatch(_loading(false))
            if (err.developerMessage) {
                dispatch(setMessage({
                    title: 'Erro',
                    text: `${err.developerMessage}`
                }))
            } else {
                dispatch(setMessage({
                    title: 'Erro',
                    text: `Ocorreu um erro inesperado!`
                }))
            }
        })
}

const _dispatchMessage = (dispatch, title, text) => {
    dispatch(_loading(false))
    dispatch(setMessage({ title, text }))
}