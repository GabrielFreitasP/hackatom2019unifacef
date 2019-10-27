import {
    SET_RANKING,
    LOADING_RANKING
} from './actionTypes'
import axios from 'axios'
import { setMessage } from './message'

const URL_BASE = 'http://10.0.4.115:8081/api/v1'

const _setRanking = (user) => ({
    type: SET_RANKING,
    payload: user
})

const _loading = (isLoading) => ({
    type: LOADING_RANKING,
    payload: isLoading
})

export const getRanking = () => async dispatch => {
    dispatch(_loading(true))
    axios.get(`${URL_BASE}/ranking`)
        .then(({ data: { records } }) => {
            dispatch(_setRanking(records))
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