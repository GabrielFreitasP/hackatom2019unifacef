import {
    SET_TRANSLATOR,
    REMOVE_TRANSLATOR,
    LOADING_TRANSLATOR,
} from './actionTypes'
import { setMessage } from './message'
import axios from 'axios'

const BASE_URL = `http://traducao.vlibras.gov.br`

const _setTranslator = (translator) => ({
    type: SET_TRANSLATOR,
    payload: translator
})

const _removeTranslator = () => ({
    type: REMOVE_TRANSLATOR
})

const _loading = (isLoading) => ({
    type: LOADING_TRANSLATOR,
    payload: isLoading
})

const _dispatchMessage = (dispatch, title, text) => {
    dispatch(_loading(false))
    dispatch(setMessage({ title, text }))
}

export const clearTranslator = () => (dispatch) => {
    dispatch(_removeTranslator(false))
}

export const translate = (text) => (dispatch) => {
    dispatch(_loading(true))

    const url = `${BASE_URL}/translate`
    const param = { text }

    axios.post(url, param)
        .then(({ request }) => {
            const gloss = request._response

            getId(gloss)
                .then((id) => {
                    getFileName(id)
                        .then((data) => {
                            let url = `${BASE_URL}/video/${data.file}`
                            dispatch(_setTranslator({ text, url }))
                            dispatch(_loading(false))
                        })
                        .catch((err) => {
                            console.error(err)
                            _dispatchMessage(dispatch, 'Erro', `Ocorreu um erro inesperado! ${err}`)
                        })
                })
                .catch((err) => {
                    console.error(err)
                    _dispatchMessage(dispatch, 'Erro', `Ocorreu um erro inesperado! ${err}`)
                })

        })
        .catch(err => {
            console.error(err)
            _dispatchMessage(dispatch, 'Erro', `Ocorreu um erro inesperado! ${err}`)
        })
}

const getId = async (gloss) => {
    const url = `${BASE_URL}/video`
    const param = { gloss }

    try {
        let { data: { id } } = await axios.post(url, param)
        return id
    } catch (err) {
        throw err
    }
}

const getFileName = async (id) => {
    const url = `${BASE_URL}/video/status/${id}`    

    try {
        let { data } = await axios.get(url)
        if (data.status != 'success') {
            console.log('wating...')
            await delay(1000)
            return await getFileName(id)
        } else {
            console.log('found!')
            return data
        }
    } catch (err) {
        throw err
    }
}

// const getFile = async (fileName) => {
//     const url = `${BASE_URL}/video/${fileName}`
//     console.log(url)

//     try {
//         let response = await axios.get(url)
//         console.log(response)
//         return response
//     } catch (err) {
//         throw err
//     }
// }

const delay = (time) => {
    return new Promise((resolve) => {
        setTimeout(resolve, time)
    })
}