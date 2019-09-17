import { PROMO_CODE } from "src/store/actions/types";

export const promoCodeInitialState =  {
    code: ""
};

export default function promoCodeReducer(state = promoCodeInitialState, action) {
    switch(action.type) {
        case PROMO_CODE:
            return {
                ...state,
                code: action.payload
            };
        default:
            return state;
    }
}