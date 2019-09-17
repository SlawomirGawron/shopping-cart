import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import { rootReducers, initialState } from 'src/store/reducers/index';

const middleWare = compose(
    applyMiddleware(
        thunk,
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const store = createStore(
    rootReducers,
    initialState,
    middleWare
);

export default store;