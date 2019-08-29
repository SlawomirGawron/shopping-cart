import { createStore } from 'redux';
import rootReducer from './reducers';

const initialState={};

// In the previous sections, we defined the actions that represent the facts about “what happened” and the reducers that update the state according to those actions.
// The Store is the object that brings them together. The store has the following responsibilities:
//  - Holds application state;
//  - Allows access to state via getState();
//  - Allows state to be updated via dispatch(action);
//  - Registers listeners via subscribe(listener);
//  - Handles unregistering of listeners via the function returned by subscribe(listener).
// It's easy to create a store if you have a reducer. In the previous section, we used combineReducers() to combine several reducers into one. We will now import it, and pass it to createStore().

// Root reducer uses combineReducers().
// Initial state can be undefined.
// The last argument is optional.
const store = createStore(
    rootReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;