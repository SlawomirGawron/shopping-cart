import { combineReducers } from 'redux';
import { promoCodeInitialState } from 'src/store/reducers/promoCodeReducer';
import promoCodeReducer from 'src/store/reducers/promoCodeReducer';

import { taxInformationInitialState } from 'src/store/reducers/taxInformationReducer';
import taxInformationReducer from 'src/store/reducers/taxInformationReducer';

import { totalInitialState } from 'src/store/reducers/totalReducer';
import totalReducer from 'src/store/reducers/totalReducer';

import { storeDiscountInitialState } from 'src/store/reducers/storeDiscountReducer';
import storeDiscountReducer from 'src/store/reducers/storeDiscountReducer';

import { provinceInitialState } from 'src/store/reducers/provinceReducer';
import provinceReducer from 'src/store/reducers/provinceReducer';



// The reducers need to be combined for createStore().
// Has to be the same name as prop?
// Reducers specify how the application's state changes in response to actions sent to the store.
export const rootReducers = combineReducers({
    promoCode: promoCodeReducer,
    taxInformation : taxInformationReducer,
    total: totalReducer,
    storeDiscount: storeDiscountReducer,
    province: provinceReducer
});

// reducers return the value, so you need the key on the left for BOTH Initial state and reducers
// reducers
//  promoCode: promoCodeReducer,
//  taxInformation : taxInformationReducer
// initial state
//  taxInformation: taxInformationInitialState,
//  promoCode: promoCodeInitialState

export const initialState = {
    taxInformation: taxInformationInitialState,
    promoCode: promoCodeInitialState,
    total: totalInitialState,
    storeDiscount: storeDiscountInitialState,
    province: provinceInitialState
};