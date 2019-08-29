import { PROMO_CODE } from "../actions/types";

const initialState = {
    open: false,
    value: ''
};

// Determines what to do based on the action. Usually modifies state in some way, or adds to it.
// Reducers specify how the application's state changes in response to actions sent to the store. ACTION.TYPE
// Remember that actions only describe what happened, but don't describe how the application's state changes.
// Just like before, we never write directly to state or its fields, and instead we return new objects. The new todos is equal to the old todos concatenated with a single new item at the end.
export default function promoCodeReducer(state = initialState, action) {
    switch(action.type) {
        case PROMO_CODE:
            return {
                ...state,
                value: action.payload
            };
        default:
            return state;
    }
}