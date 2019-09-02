import { API_RESULT } from "src/store/actions/types";

// Action is just a plain object with type and payload.
// Dispatch happens outside of action creator. i.e in main component, do mapDispatchToProps = {... => dispatch(myActionCreator(changes))}.
// export const handlePromoCodeChange = e => dispatch => {
//     dispatch({
//         type: PROMO_CODE,
//         payload: event
//     });
// };
// dispatch() can be called at the end as well. look at notes.

// Action creator for getTaxInformation. event is the value of payload when it gets dispatched to store.
export function getTaxInformation(value) {
    return {
        type: API_RESULT,
        payload: value
    }
}

// action creator in thescope of thunk, all it is a function that dipatches aeither another action creator or an action.
// last action creator has to dispatch an action.
// get state has both promoCode and taxInformation in it
export function getTaxInformationASync () {
    return async dispatch => {
        var result = "api request";
        console.log(result);

        await fetch('http://jsonplaceholder.typicode.com/users')
            .then(res => {
                res.json()
            })
            .then((data) => {
                console.log(data);
                dispatch(getTaxInformation(data));
            })
            .catch((error) => {
                console.log(error);
            });
        dispatch(getTaxInformation("status failed"));
    };
}