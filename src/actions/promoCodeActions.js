import { PROMO_CODE } from "./types";

// Action is just a plain object with type and payload.
// Dispatch happens outside of action creator. i.e in main component, do mapDispatchToProps = {... => dispatch(myActionCreator(changes))}.
// export const handleChange = e => dispatch => {
//     dispatch({
//         type: PROMO_CODE,
//         payload: event
//     });
// };
// dispatch() can be called at the end as well. look at notes.

// Action creator for promoCode.
export function handleChange(event) {
    return {
        type: PROMO_CODE,
        payload: event
    }
}

