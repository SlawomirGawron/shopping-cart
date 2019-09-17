import { PROVINCE } from "src/store/actions/types";

export const provinceInitialState = "on";

export default function provinceReducer(state = provinceInitialState, action) {
    switch(action.type) {
        case PROVINCE:
            return action.payload;
        default:
            return state;
    }
}