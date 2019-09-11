import React from 'react';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import 'src/components/TotalDue/TotalDue.scss';

function TotalDue(props) {
    return (
        <div className="estimated-total-row">
            <Row>
                <Col md={6} className="estimated-total-column">
                    <h2>
                        Total
                    </h2>
                </Col>
                <Col md={6} className="estimated-total-column">
                    <h2>
                        ${props.total}
                    </h2>
                </Col>
            </Row>
        </div>
    );
}

TotalDue.propTypes = {
    total: PropTypes.number.isRequired,
};

export default TotalDue;