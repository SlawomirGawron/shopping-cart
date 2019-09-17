import { PROVINCE } from "src/store/actions/types";

export function provinceActionCreator(value) {
    return {
        type: PROVINCE,
        payload: value
    }
}