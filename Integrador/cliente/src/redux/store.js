import thunk from 'redux-thunk'
import {createStore, applyMiddleware, compose} from 'redux'
import rootReducer from './reducer'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const Store = createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(thunk))
);

export default Store
