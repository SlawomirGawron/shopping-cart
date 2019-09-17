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

export const rootReducers = combineReducers({
    promoCode: promoCodeReducer,
    taxInformation : taxInformationReducer,
    total: totalReducer,
    storeDiscount: storeDiscountReducer,
    province: provinceReducer
});

export const initialState = {
    taxInformation: taxInformationInitialState,
    promoCode: promoCodeInitialState,
    total: totalInitialState,
    storeDiscount: storeDiscountInitialState,
    province: provinceInitialState
};