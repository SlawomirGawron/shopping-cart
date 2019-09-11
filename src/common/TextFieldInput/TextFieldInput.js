import React from 'react';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import 'src/common/TextFieldInput/TextFieldInput.scss';

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


function TextFieldInput(props) {
    return (
        <div className="inputs">
            <Row>
                <Col med={6} style={styles.storeDiscountNumber}>
                    Left
                </Col>
                <Col med={6} style={styles.storeDiscountNumber}>
                    Right
                </Col>
            </Row>
        </div>
    );
}

TextFieldInput.propTypes = {
    edit: PropTypes.number.isRequired,
};

export default TextFieldInput;