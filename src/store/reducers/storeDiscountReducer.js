import { STORE_DISCOUNT } from "src/store/actions/types";

export const storeDiscountInitialState = 0;

// Determines what to do based on the action. Usually modifies state in some way, or adds to it.
// Reducers specify how the application's state changes in response to actions sent to the store. ACTION.TYPE
// Remember that actions only describe what happened, but don't describe how the application's state changes.
// Just like before, we never write directly to state or its fields, and instead we return new objects. The new todos is equal to the old todos concatenated with a single new item at the end.

// reducers changes the value of the store.
export default function storeDiscountReducer(state = storeDiscountInitialState, action) {
    switch(action.type) {
        case STORE_DISCOUNT:
            return action.payload;
        default:
            return state;
    }
}