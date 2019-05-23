import { PROMO_CODE } from "./types";

// export const handleChange = e => dispatch => {
//     dispatch({
//         type: PROMO_CODE,
//         payload: event
//     });
// };

export function handleChange(event) {
    return {
        type: PROMO_CODE,
        payload: event
    }
}

