import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import SubTotal from '../SubTotal/SubTotal';
import PickupSavings from '../PickupSavings/PickupSavings';
import TaxesFees from "../TaxesFees/TaxesFees";
import EstimatedTotal from "../EstimatedTotal/EstimatedTotal";
import ItemDetails from "../ItemDetails/ItemDetails";
import PromoCode from "../PromoCode/PromoCode";
import { connect } from "react-redux";
import { handleChange } from "../../actions/promoCodeActions";

import './MainPage.scss';
// Fix sales tax and area code.***********************************************************


function MainPage(props) {
    // States using React Hooks. If setMyState isn't needed, then consider making it a variables/constant instead.
    const [total, setTotal] = useState(100);
    const [pickupSavings, setPickupSavings] = useState(-3.85);
    const [promoMultiplier, setPromoMultiplier] = useState(1);
    const [disablePromoButton, setDisablePromoButton] = useState(false);

    // Calculations
    const taxes = ((total + pickupSavings) * 0.0875);
    const estimatedTotal = (total + pickupSavings + taxes) * promoMultiplier;

    // Helper functions.
    const giveDiscountHandler = () => {
        if (props.promoCode === "discount") {
            setPromoMultiplier(0.9);
            setDisablePromoButton(true);
        }
    };

    const roundTwoDecimal = (number) => {
        return Math.round( number * 1e2)/1e2;
    };

    return (
        <div className="main-page-grid">
            <Container className="main-page-container">
                <SubTotal price={roundTwoDecimal(total)} />
                <PickupSavings price={roundTwoDecimal(pickupSavings)}/>
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
        promoCode: state.promoCode.value,
    }
};

// Maps action creators to dispatches. Look at ..actions.js. This is the shorthand version, meaning that it does a a call in the background.
const mapActionsToProps = {
    handleChange: handleChange
};

// Connects the store to the component.
// Store => createStore, actions, reducers
// connect => MapStateToProps(what you want to get from the store), mapDispatchToProps(This is not reducers. This dispatches an action to the store,
//                            meaning if you click this button then Redux will send that action to the store, the store will check it's reducers for that action [action.type], which updates the store)
// Store and connect are sort of separate things.
export default connect(mapStateToProps, mapActionsToProps)(MainPage);