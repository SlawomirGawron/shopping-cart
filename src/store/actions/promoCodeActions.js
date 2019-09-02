import { PROMO_CODE } from "src/store/actions/types";

// Action is just a plain object with type and payload.
// Dispatch happens outside of action creator. i.e in main component, do mapDispatchToProps = {... => dispatch(myActionCreator(changes))}.
// export const handlePromoCodeChange = e => dispatch => {
//     dispatch({
//         type: PROMO_CODE,
//         payload: event
//     });
// };
// dispatch() can be called at the end as well. look at notes.

// Action creator for promoCode.
export function handlePromoCodeChange(event) {
    return {
        type: PROMO_CODE,
        payload: event
    }
}

