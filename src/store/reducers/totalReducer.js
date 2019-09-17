import { TOTAL } from "src/store/actions/types";

export const totalInitialState = 100;

export default function totalReducer(state = totalInitialState, action) {
    switch(action.type) {
        case TOTAL:
            return action.payload;
        default:
            return state;
    }
}