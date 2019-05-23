import { createStore } from 'redux';
import rootReducer from './reducers';

const initialState={};

const store = createStore(
    rootReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;