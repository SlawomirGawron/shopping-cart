import { PROMO_CODE } from "src/store/actions/types";

export function promoCodeActionCreator(value) {
    return {
        type: PROMO_CODE,
        payload: value
    }
}

