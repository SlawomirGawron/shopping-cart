import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import './MainPage.scss';
import SubTotal from '../SubTotal/SubTotal';
import PickupSavings from '../PickupSavings/PickupSavings';
import TaxesFees from "../TaxesFees/TaxesFees";
import EstimatedTotal from "../EstimatedTotal/EstimatedTotal";
import ItemDetails from "../ItemDetails/ItemDetails";
import PromoCode from "../PromoCode/PromoCode";
import { connect } from "react-redux";
import { handleChange } from "../../actions/promoCodeActions";

// Fix sales tax and area code.***********************************************************


function MainPage(props) {
    // States
    const [total, setTotal] = useState(100);
    const [pickupSavings, setPickupSavings] = useState(-3.85);
    const [taxes, setTaxes] = useState(0);
    const [estimatedTotal, setEstimatedTotal] = useState(0);
    const [disablePromoButton, setDisablePromoButton] = useState(false);

    const giveDiscountHandler = () => {
        if (props.promoCode === "Discount") {
            setEstimatedTotal(estimatedTotal * 0.9);
            setDisablePromoButton(true);
        }
    };

    useEffect( () => {
        setTaxes((total + pickupSavings) * 0.0875)
        setEstimatedTotal(total + pickupSavings + taxes)

    });

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
                <hr/>
                <PromoCode promoCode={"0"}
                           isDisabled={disablePromoButton}
                           giveDiscount={() => giveDiscountHandler()}/>

            </Container>
        </div>
    );
}



const mapStateToProps = (state) => {
    return {
        promoCode: state.promoCode.value
    }
};

const mapActionsToProps = {
    handleChange: handleChange
};


export default connect(mapStateToProps, mapActionsToProps)(MainPage);