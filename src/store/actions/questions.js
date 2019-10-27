import {
    SET_QUESTIONS,
    LOADING_QUESTIONS
} from './actionTypes'
import axios from 'axios'
import { setMessage } from './message'
import { getRanking } from './ranking'

const URL_BASE = 'http://10.0.4.115:8081/api/v1'

const _setQuestions = (user) => ({
    type: SET_QUESTIONS,
    payload: user
})

const _loading = (isLoading) => ({
    type: LOADING_QUESTIONS,
    payload: isLoading
})

export const getQuestions = () => async dispatch => {
    dispatch(_loading(true))
    console.log('getting questions...')
    axios.get(`${URL_BASE}/questions`)
        .then(({ data: { records } }) => {
            dispatch(_setQuestions(records))
            dispatch(_loading(false))
        })
        .catch(err => {
            dispatch(_loading(false))
            dispatch(setMessage({
                title: 'Erro',
                text: `Ocorreu um erro inesperado!`
            }))
        })
}

export const putQuestions = (point) => async (dispatch, getState) => {
    const { user } = getState()
    console.log('putting points questions...')
    console.log(`${URL_BASE}/point/${point}/user/${user.id}`)
    axios.put(`${URL_BASE}/point/${point}/user/${user.id}`, {})
        .then(({ data }) => {
            dispatch(getRanking())
        })
        .catch(err => {
            dispatch(setMessage({
                title: 'Erro',
                text: `Falha ao gravar pontos!`
            }))
        })
}