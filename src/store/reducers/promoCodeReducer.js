import { PROMO_CODE } from "src/store/actions/types";

export const promoCodeInitialState =  {
    code: ""
};

// Determines what to do based on the action. Usually modifies state in some way, or adds to it.
// Reducers specify how the application's state changes in response to actions sent to the store. ACTION.TYPE
// Remember that actions only describe what happened, but don't describe how the application's state changes.
// Just like before, we never write directly to state or its fields, and instead we return new objects. The new todos is equal to the old todos concatenated with a single new item at the end.

// reducers cahnges the value of the store.
export default function promoCodeReducer(state = promoCodeInitialState, action) {
    switch(action.type) {
        case PROMO_CODE:
            return {
                ...state, // THIS IS THE INSIDE/VALUE of promoCode in the store
                code: action.payload
            };
        default:
            return state;
    }
}