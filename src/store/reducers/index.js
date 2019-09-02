import { combineReducers } from 'redux';
import promoCodeReducer from 'src/store/reducers/promoCodeReducer';
import taxInformationReducer from 'src/store/reducers/taxInformationReducer';
import { promoCodeInitialState } from 'src/store/reducers/promoCodeReducer';
import { taxInformationInitialState } from 'src/store/reducers/taxInformationReducer';

// The reducers need to be combined for createStore().
// Has to be the same name as prop?
// Reducers specify how the application's state changes in response to actions sent to the store.
export const rootReducers = combineReducers({
    promoCode: promoCodeReducer,
    taxInformation : taxInformationReducer
});

export const initialState = {
    taxInformation: taxInformationInitialState,
    promoCode: promoCodeInitialState
};