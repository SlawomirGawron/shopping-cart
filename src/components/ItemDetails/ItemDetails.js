import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Media from 'react-bootstrap/Media';
import Collapse from 'react-bootstrap/Collapse';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import IGImage from 'src/images/infinity-gauntlet.jpg';

import 'src/components/ItemDetails/ItemDetails.scss';

function ItemDetails(props) {
    // States
    const [open, setOpen] = useState(false);

    return (
        <div className="item-details-row">
            <Button
                className="item-details-button"
                variant="outline-light"
                onClick={() => setOpen(!open)}
            >
                {(open === false) ? "See": "Hide"} item details
                {(open === false) ? " +": " -"}
            </Button>
            <Collapse in={open}>
                <div>
                    <Card>
                        <Media>
                            <Media.Body>
                                <h5>Media Heading</h5>
                                <Row className="item-details-media-grid">
                                    <Col md={6}>
                                        <strong>{props.price}</strong>
                                        <br/>
                                        <strong className="item-details-price-strike">{props.price}</strong>
                                    </Col>
                                    <Col md={6}>
                                        Qty: 1
                                    </Col>
                                </Row>
                            </Media.Body>
                            <img
                                width={100}
                                height={100}
                                alt="thumbnail"
                                src={IGImage}
                            />
                        </Media>
                    </Card>
                </div>
            </Collapse>
        </div>
    );
}

ItemDetails.propTypes = {
    price: PropTypes.number.isRequired,
};

export default ItemDetails;
