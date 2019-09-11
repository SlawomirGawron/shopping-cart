import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import { rootReducers, initialState } from 'src/store/reducers/index';

const middleWare =  compose(
    applyMiddleware(
        thunk,
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// The store is just an object with props/states inside it. MapstatetoProps updates the components props to the state of the store => you can access the store through mapstatetoprops.
// mapdispatch to props are the action creators/actions. which get sent/dispatched to the store. the store then looks through it's reducers for the action it received, and updates the store based on what the reducer does.

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
    rootReducers,
    initialState,
    middleWare
);

export default store;