import {
    createStore,
    combineReducers,
    compose,
    applyMiddleware
} from 'redux'
import thunk from 'redux-thunk'
import messageReducer from './reducers/message'
import userReducer from './reducers/user'
import translatorReducer from './reducers/translator'
import rankingReducer from './reducers/ranking'

const reducers = combineReducers({
    message: messageReducer,
    user: userReducer,
    translator: translatorReducer,
    ranking: rankingReducer
});

const storeConfig = () => {
    return createStore(reducers, compose(applyMiddleware(thunk)))
}

export default storeConfig