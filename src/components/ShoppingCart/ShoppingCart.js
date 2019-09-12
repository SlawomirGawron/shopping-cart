import React, { useState, useEffect  } from 'react';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';
import SubTotal from 'src/components/SubTotal/SubTotal';
import StoreDiscount from 'src/components/StoreDiscount/StoreDiscount';
import TaxesFees from 'src/components/TaxesFees/TaxesFees';
import TotalDue from 'src/components/TotalDue/TotalDue';
import ItemDetails from 'src/components/ItemDetails/ItemDetails';
import PromoCode from 'src/components/PromoCode/PromoCode';
import { promoCodeActionCreator } from 'src/store/actions/promoCodeActions';
import { taxInformationActionCreatorAsync } from 'src/store/actions/taxInformationActions';
import { getPromoCode } from 'src/store/selectors/promoCodeSelectors';
import { getTaxInformation } from 'src/store/selectors/taxInformationSelectors';

import 'src/components/ShoppingCart/ShoppingCart.scss';
import {getTotal} from "src/store/selectors/totalSelectors";
import {totalActionCreator} from "src/store/actions/totalActions";

function ShoppingCart(props) {
    const { taxInformationActionCreatorAsync, promoCode, total } = props;

    // States using React Hooks. If setMyState isn't needed, then consider making it a variables/constant instead.
    const [storeDiscount, setStoreDiscount] = useState(-3.00);
    const [promoMultiplier, setPromoMultiplier] = useState(1);
    const [disablePromoButton, setDisablePromoButton] = useState(false);
    const [province, setProvince] = useState("on");

    // Helper functions.
    const giveDiscountHandler = () => {
        if (promoCode.code === "discount") {
            setPromoMultiplier(0.9);
            setDisablePromoButton(true);
        }
    };

    const roundTwoDecimal = (number) => {
        return Math.round( number * 1e2)/1e2;
    };

    const getSalesTaxRate = () => {
        const { taxInformation } = props;

        console.log(taxInformation.result[province]["hst"]);

        return taxInformation.result[province]["hst"];
    };

    // Calculations
    const taxes = ((total + storeDiscount) * getSalesTaxRate());
    const totalDue = (total + storeDiscount + taxes) * promoMultiplier;

    useEffect(() => {
        taxInformationActionCreatorAsync();
    },[taxInformationActionCreatorAsync]);

    return (
        <div className="main-page-grid">
            <Container className="main-page-container">
                <SubTotal total={roundTwoDecimal(total)} />
                <StoreDiscount savings={roundTwoDecimal(storeDiscount)}/>
                <TaxesFees taxes={roundTwoDecimal(taxes)}/>
                <hr />
                <TotalDue total={roundTwoDecimal(totalDue)}/>
                <ItemDetails price={roundTwoDecimal(totalDue)}/>
                <hr />
                <PromoCode isDisabled={disablePromoButton}
                           giveDiscount={() => giveDiscountHandler()}/>

            </Container>
        </div>
    );
}


// Maps states to properties for connect.
const mapStateToProps = (state) => {
    return {
        taxInformation: getTaxInformation(state),
        promoCode: getPromoCode(state),
        total: getTotal(state)
    }
};

// Maps action creators to dispatches. Look at ..actions.js. This is the shorthand version, meaning that it does a a call in the background.
const mapDispatchToProps = {
    promoCodeActionCreator: promoCodeActionCreator,
    taxInformationActionCreatorAsync: taxInformationActionCreatorAsync,
    totalActionCreator: totalActionCreator
};

// Connects the store to the component.
// Store => createStore, actions, reducers
// connect => MapStateToProps(what you want to get from the store), mapDispatchToProps(This is not reducers. This dispatches an action to the store,
//                            meaning if you click this button then Redux will send that action to the store, the store will check it's reducers for that action [action.type], which updates the store)
// Store and connect are sort of separate things.
export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);