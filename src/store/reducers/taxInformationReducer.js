import { API_RESULT } from "src/store/actions/types";

export const taxInformationInitialState =  {
    result: {
        on: {
            applicable: 0.13,
            gst: 0.05,
            hst: 0.13,
            pst: 0.08,
            source: "Wikipedia (https://en.wikipedia.org/wiki/Sales_taxes_in_Canada), accessed May 31 2019.",
            start: "2008-01-01 00:00:00",
            type: "hst",
            updated_at: "2019-05-31 14:57:21"
        }
    }
};

// Determines what to do based on the action. Usually modifies state in some way, or adds to it.
// Reducers specify how the application's state changes in response to actions sent to the store. ACTION.TYPE
// Remember that actions only describe what happened, but don't describe how the application's state changes.
// Just like before, we never write directly to state or its fields, and instead we return new objects. The new todos is equal to the old todos concatenated with a single new item at the end.

// reducers cahnges the value of the store.
export default function taxInformationReducer(state = taxInformationInitialState, action) {
    switch(action.type) {
        case API_RESULT:
            return {

                ...state, // THIS IS THE INSIDE/VALUE of promoCode in the store
                result: action.payload
            };
        default:
            return state;
    }
}