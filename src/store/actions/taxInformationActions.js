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
    return async (dispatch, getState) => {
        const proxyUrl = 'https://cors-anywhere.herokuapp.com/',
            targetUrl = 'http://api.salestaxapi.ca/v2/province/all';

        await fetch(proxyUrl + targetUrl)
            .then(res => res.json()
            )
            .then((data) => {
                console.log(data);
                console.log("----------------------------------------------------------------------");
                dispatch(getTaxInformation(data));
            })
            .catch((error) => {
                console.log("Failed to fetch data from API.");
                console.log(error);
                dispatch(
                    getTaxInformation({on: {
                        applicable: 0.13,
                        gst: 0.05,
                        hst: 0.13,
                        pst: 0.08,
                        source: "Wikipedia (https://en.wikipedia.org/wiki/Sales_taxes_in_Canada), accessed May 31 2019.",
                        start: "2008-01-01 00:00:00",
                        type: "hst",
                        updated_at: "2019-05-31 14:57:21"
                    }}
                    ));
            });
    };

    // return async (dispatch, getState) => {
    //     var result = "api request";
    //     console.log(result);
    //
    //     // http://api.salestaxapi.ca/v2/province/all
    //
    //     await fetch('http://jsonplaceholder.typicode.com/users')
    //         .then(res => res.json()
    //         )
    //         .then((data) => {
    //             console.log("Inside fetch");
    //             console.log(data);
    //             dispatch(getTaxInformation(data));
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //             dispatch(getTaxInformation("Failed to fetch data from API."));
    //         });
    // };

    // broken
    // return async (dispatch, getState) => {
    //     var result = "api request";
    //     console.log(result);
    //
    //     await fetch('http://jsonplaceholder.typicode.com/users')
    //         .then(res => {
    //             res.json()
    //         })
    //         .then((data) => {
    //             console.log("Inside fetch");
    //             console.log(data);
    //             dispatch(getTaxInformation(data));
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });
    //     dispatch(getTaxInformation("Failed to fetch data from API."));
    // };
}