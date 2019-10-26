import {
    createStore,
    combineReducers,
    compose,
    applyMiddleware
} from 'redux'
import thunk from 'redux-thunk'

const reducers = combineReducers({
});

const storeConfig = () => {
    return createStore(reducers, compose(applyMiddleware(thunk)))
}

export default storeConfig