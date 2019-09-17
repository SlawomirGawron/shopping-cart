import { STORE_DISCOUNT } from "src/store/actions/types";

export const storeDiscountInitialState = 0;

export default function storeDiscountReducer(state = storeDiscountInitialState, action) {
    switch(action.type) {
        case STORE_DISCOUNT:
            return action.payload;
        default:
            return state;
    }
}