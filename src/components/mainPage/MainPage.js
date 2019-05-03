import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import './MainPage.scss';
import SubTotal from '../subTotal/SubTotal';
import PickupSavings from '../pickupSavings/PickupSavings';

function MainPage(props) {
    // States
    const [total, setTotal] = useState(100);
    const [pickupSavings, setPickupSavings] = useState(-3.85);

    return (
        <div className="main-page-grid">
            <Container className="main-page-container">
                <SubTotal price={total.toFixed(2)} />
                <PickupSavings price={pickupSavings.toFixed(2)}/>
            </Container>
        </div>
    );
}

export default MainPage;