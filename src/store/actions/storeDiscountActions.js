import { STORE_DISCOUNT } from "src/store/actions/types";

export function storeDiscountActionCreator(value) {
    return {
        type: STORE_DISCOUNT,
        payload: value
    }
}