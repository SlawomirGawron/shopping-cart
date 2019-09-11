import React from 'react';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'src/components/TaxesFees/TaxesFees.scss';

function TaxesFees(props) {
    return (
        <div className="taxes-fees-row">
            <Row>
                <Col md={6} className="taxes-fees-column">
                    Est. taxes & fees (for Ontario)
                </Col>
                <Col md={6} className="taxes-fees-column">
                    ${props.taxes}
                </Col>
            </Row>
        </div>
    );
}

TaxesFees.propTypes = {
    taxes: PropTypes.number.isRequired,
};

export default TaxesFees;