import { API_RESULT } from "src/store/actions/types";

export function taxInformationActionCreator(value) {
    return {
        type: API_RESULT,
        payload: value
    }
}

export function taxInformationActionCreatorAsync () {
    return async (dispatch, getState) => {
        const proxyUrl = 'https://cors-anywhere.herokuapp.com/',
            targetUrl = 'http://api.salestaxapi.ca/v2/province/all';

        await fetch(proxyUrl + targetUrl)
            .then(res => res.json()
            )
            .then((data) => {

                dispatch(taxInformationActionCreator(data));
            })
            .catch((error) => {
                dispatch(
                    taxInformationActionCreator({on: {
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
}