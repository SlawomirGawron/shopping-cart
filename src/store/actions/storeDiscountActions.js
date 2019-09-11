import { STORE_DISCOUNT } from "src/store/actions/types";

// Action is just a plain object with type and payload.
// Dispatch happens outside of action creator. i.e in main component, do mapDispatchToProps = {... => dispatch(myActionCreator(changes))}.
// export const promoCodeActionCreator = e => dispatch => {
//     dispatch({
//         type: PROMO_CODE,
//         payload: event
//     });
// };
// dispatch() can be called at the end as well. look at notes.

// Action creator for taxInformationActionCreator. event is the value of payload when it gets dispatched to store.
export function storeDiscountActionCreator(value) {
    return {
        type: STORE_DISCOUNT,
        payload: value
    }
}