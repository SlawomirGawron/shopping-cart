import React from 'react';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import './PickupSavings.scss';

const styles = {
    pickupSavings: {
        textDecoration: 'underline'
    },

    totalSavings: {
        color: 'red',
        fontWeight: 800
    }
};


function PickupSavings(props) {
    // Other
    const tooltip = (
        <Tooltip id="pickup-savings-tooltip">
            <p>
                Picking up your order in the store helps cut costs, and we pass the savings onto you.
            </p>
        </Tooltip>
    );

    return (
        <div className="pickup-savings-row">
            <Row>
                <Col med={6} className="pickup-savings-column">
                    <OverlayTrigger placement="bottom" overlay={tooltip}>
                        <div style={styles.pickupSavings}>
                            Pickup Savings
                        </div>
                    </OverlayTrigger>
                </Col>
                <Col med={6} style={styles.totalSavings}>
                    {props.price}
                </Col>
            </Row>
        </div>
    );
}

PickupSavings.propTypes = {
    price: PropTypes.number.isRequired,
};

export default PickupSavings;