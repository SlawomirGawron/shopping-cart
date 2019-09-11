import React from 'react';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

import 'src/components/StoreDiscount/StoreDiscount.scss';

const styles = {
    storeDiscountText: {
        textDecoration: 'underline'
    },

    storeDiscountNumber: {
        color: 'red',
        fontWeight: 800,
        borderStyle: 'solid',
        borderColor: 'yellow'
    }
};


function StoreDiscount(props) {
    // Other
    const tooltip = (
        <Tooltip className="store-discount-tooltip">
            <p>
                Picking up your order in the store helps cut costs, and we pass the savings onto you.
            </p>
        </Tooltip>
    );

    return (
        <div className="store-discount-row">
            <Row>
                <Col med={6} className="store-discount-column">
                    <OverlayTrigger placement="bottom" overlay={tooltip}>
                        <div style={styles.storeDiscountText}>
                            Store Discount
                        </div>
                    </OverlayTrigger>
                </Col>
                <Col med={6} style={styles.storeDiscountNumber}>
                    {props.savings}
                </Col>
            </Row>
        </div>
    );
}

StoreDiscount.propTypes = {
    savings: PropTypes.number.isRequired,
};

export default StoreDiscount;