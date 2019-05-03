import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import './MainPage.scss';
import SubTotal from '../SubTotal/SubTotal';
import PickupSavings from '../PickupSavings/PickupSavings';
import TaxesFees from "../TaxesFees/TaxesFees";
import EstimatedTotal from "../EstimatedTotal/EstimatedTotal";

function MainPage(props) {
    // States
    const [total, setTotal] = useState(100);
    const [pickupSavings, setPickupSavings] = useState(-3.85);
    const [taxes, setTaxes] = useState(0);

    return (
        <div className="main-page-grid">
            <Container className="main-page-container">
                <SubTotal price={total.toFixed(2)} />
                <PickupSavings price={pickupSavings.toFixed(2)}/>
                <TaxesFees taxes={taxes.toFixed(2)}/>
                <hr />
                <EstimatedTotal total={0}/>

            </Container>
        </div>
    );
}

export default MainPage;