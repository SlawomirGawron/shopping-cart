import { TOTAL } from "src/store/actions/types";

export function totalActionCreator(value) {
    return {
        type: TOTAL,
        payload: value
    }
}