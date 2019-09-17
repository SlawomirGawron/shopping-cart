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

export default function taxInformationReducer(state = taxInformationInitialState, action) {
    switch(action.type) {
        case API_RESULT:
            return {

                ...state,
                result: action.payload
            };
        default:
            return state;
    }
}