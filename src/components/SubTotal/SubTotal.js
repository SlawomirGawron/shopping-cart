import React from 'react';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import 'src/components/SubTotal/SubTotal.scss';

function SubTotal(props) {
    return (
        <div className="sub-total-row">
            <Row>
                <Col md={6} className="sub-total-column" >
                    Subtotal
                </Col>
                <Col md={6} className="sub-total-column">
                    ${props.total}
                </Col>
            </Row>
        </div>
    );
}

SubTotal.propTypes = {
    total: PropTypes.number.isRequired,
};

export default SubTotal;