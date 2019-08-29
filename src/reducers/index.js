import { combineReducers } from 'redux';
import promoCodeReducer from './promoCodeReducer';

// The reducers need to be combined for createStore().
// Has to be the same name as prop?
// Reducers specify how the application's state changes in response to actions sent to the store.
export default combineReducers({
    promoCode: promoCodeReducer
});