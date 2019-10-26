import {
    createStore,
    combineReducers,
    compose,
    applyMiddleware
} from 'redux'

const reducers = combineReducers({
});

const storeConfig = () => {
    return createStore(reducers, compose(applyMiddleware(thunk)))
}

export default storeConfig