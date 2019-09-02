import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Collapse from 'react-bootstrap/Collapse';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl'
import { handlePromoCodeChange } from 'src/store/actions/promoCodeActions';

import 'src/components/PromoCode/PromoCode.scss';

function PromoCode(props) {
    const { handlePromoCodeChange } = props;

    // States
    const [open, setOpen] = useState(false);

    const handleChange = event => {
        handlePromoCodeChange(event.target.value);
    };

    return (
        <div className="promo-code-row">
            <Button
                className="promo-code-button"
                variant="outline-light"
                onClick={() => setOpen(!open)}
            >
                {(open === false) ? "Apply ": "Hide "} promo code
                {(open === false) ? " +": " -"}
            </Button>
            <Collapse in={open}>
                <div>
                    <Card>
                        <Row className="promo-code-grid">
                            <Col md={12}>
                                <Form>
                                    <Form.Group controlId="formInlineName">
                                        <Form.Label>Promo Code</Form.Label>
                                        <FormControl
                                            type="text"
                                            placeholder="Enter promo code"
                                            value={props.promoCode}
                                            onChange={handleChange}
                                        />
                                    </Form.Group>
                                    <Button
                                        block
                                        variant="success"
                                        className="btn-success"
                                        disabled={props.isDisabled}
                                        onClick={props.giveDiscount}
                                    >
                                        Apply
                                    </Button>
                                </Form>
                            </Col>
                        </Row>
                    </Card>
                </div>
            </Collapse>
        </div>
    );
}

PromoCode.propTypes = {
    promoCode: PropTypes.any.isRequired,
    isDisabled: PropTypes.bool.isRequired,
    giveDiscount: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    promoCode: state.promoCode.value
});

// Instead of doing mapDispatchToProps, you can just do connect(mapstatetoprops, {actioncreator})(component).
export default connect(mapStateToProps, {handlePromoCodeChange})(PromoCode);