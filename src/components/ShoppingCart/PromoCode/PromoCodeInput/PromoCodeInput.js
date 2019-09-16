import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

import 'src/components/ShoppingCart/PromoCode/PromoCodeInput/PromoCodeInput.scss';

function PromoCodeInput(props) {
    const { isDisabled, giveDiscount, handleChange,promoCode } = props;

    return (
        <div className="promo-code-input">
            <Card>
                <Form>
                    <Form.Group controlId="formInlineName">
                        <FormControl
                            type="text"
                            placeholder="Enter promo code"
                            value={promoCode.code}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Button
                        block
                        variant="success"
                        className="btn-success"
                        disabled={isDisabled}
                        onClick={giveDiscount}
                    >
                        Apply Code
                    </Button>
                </Form>
            </Card>
        </div>
    );
}

PromoCodeInput.propTypes = {
    promoCode: PropTypes.object.isRequired,
    isDisabled: PropTypes.bool.isRequired,
    giveDiscount: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired
};

export default PromoCodeInput;