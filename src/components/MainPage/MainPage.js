import React, { useState, useEffect  } from 'react';
import Container from 'react-bootstrap/Container';
import { connect } from 'react-redux';

import SubTotal from 'src/components/SubTotal/SubTotal';
import StoreDiscount from 'src/components/PickupSavings/StoreDiscount';
import TaxesFees from 'src/components/TaxesFees/TaxesFees';
import EstimatedTotal from 'src/components/EstimatedTotal/EstimatedTotal';
import ItemDetails from 'src/components/ItemDetails/ItemDetails';
import PromoCode from 'src/components/PromoCode/PromoCode';
import { handlePromoCodeChange } from 'src/store/actions/promoCodeActions';
import { getTaxInformationASync } from 'src/store/actions/taxInformationActions';
import { getPromoCodeValue } from 'src/store/selectors/promoCodeSelectors';
import { getTaxInformation } from 'src/store/selectors/taxInformationSelectors';

import 'src/components/MainPage/MainPage.scss';
// Fix sales tax and area code.***********************************************************

function MainPage(props) {
    const { getTaxInformationASync, promoCode } = props;

    // States using React Hooks. If setMyState isn't needed, then consider making it a variables/constant instead.
    const [total, setTotal] = useState(100);
    const [pickupSavings, setPickupSavings] = useState(-3.85);
    const [promoMultiplier, setPromoMultiplier] = useState(1);
    const [disablePromoButton, setDisablePromoButton] = useState(false);
    const [province, setProvince] = useState("on");

    // Helper functions.
    const giveDiscountHandler = () => {
        if (promoCode === "discount") {
            setPromoMultiplier(0.9);
            setDisablePromoButton(true);
        }
    };

    const roundTwoDecimal = (number) => {
        return Math.round( number * 1e2)/1e2;
    };

    const getSalesTaxRate = () => {
        const { taxInformation } = props;
        var salesTaxRate = 0;

        console.log(taxInformation.result[province]);
        //salesTaxRate = taxInformation.result[province]["hst"];


        return 0.0875;
    };

    // Calculations
    const taxes = ((total + pickupSavings) * getSalesTaxRate()); // FIX----------------------
    const estimatedTotal = (total + pickupSavings + taxes) * promoMultiplier;

    useEffect(() => {
        getTaxInformationASync();
    },[getTaxInformationASync]);

    return (
        <div className="main-page-grid">
            <Container className="main-page-container">
                <SubTotal price={roundTwoDecimal(total)} />
                <StoreDiscount price={roundTwoDecimal(pickupSavings)}/>
                <TaxesFees taxes={roundTwoDecimal(taxes)}/>
                <hr />
                <EstimatedTotal total={roundTwoDecimal(estimatedTotal)}/>
                <ItemDetails price={roundTwoDecimal(estimatedTotal)}/>
                <hr />
                <PromoCode promoCode={"0"}
                           isDisabled={disablePromoButton}
                           giveDiscount={() => giveDiscountHandler()}/>

            </Container>
        </div>
    );
}


// Maps states to properties for connect.
const mapStateToProps = (state) => {
    return {
        taxInformation: getTaxInformation(state),
        promoCode: getPromoCodeValue(state)
    }
};

// Maps action creators to dispatches. Look at ..actions.js. This is the shorthand version, meaning that it does a a call in the background.
const mapDispatchToProps = {
    handlePromoCodeChange,
    getTaxInformationASync
};

// Connects the store to the component.
// Store => createStore, actions, reducers
// connect => MapStateToProps(what you want to get from the store), mapDispatchToProps(This is not reducers. This dispatches an action to the store,
//                            meaning if you click this button then Redux will send that action to the store, the store will check it's reducers for that action [action.type], which updates the store)
// Store and connect are sort of separate things.
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);