import React from 'react';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'src/components/TaxesFees/TaxesFees.scss';

function TaxesFees(props) {
    const { taxes, province } = props;
    return (
        <div className="taxes-fees-row">
            <Row>
                <Col md={6} className="taxes-fees-column">
                    Taxes ({province})
                </Col>
                <Col md={6} className="taxes-fees-column">
                    ${taxes}
                </Col>
            </Row>
        </div>
    );
}

TaxesFees.propTypes = {
    taxes: PropTypes.number.isRequired,
    province: PropTypes.string.isRequired,
};

export default TaxesFees;