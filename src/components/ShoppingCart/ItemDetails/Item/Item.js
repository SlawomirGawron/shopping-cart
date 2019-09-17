import React from 'react';
import PropTypes from 'prop-types';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Media from 'react-bootstrap/Media';
import Card from 'react-bootstrap/Card';
import IGImage from 'src/images/infinity-gauntlet.jpg';

import 'src/components/ShoppingCart/ItemDetails/Item/Item.scss';

const styles = {
    itemColumnLeft: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'black',
    },

    itemColumnRight: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'black',
        borderLeft: '2px solid',
    }
};

function Item(props) {
    const { price, originalPrice } = props;

    return (
        <div className="item">
            <Card>
                <Media>
                    <Media.Body>
                        <Typography color="inherit" variant="h6" gutterBottom style={{textDecoration: 'underline'}}>
                            Infinity Gauntlet
                        </Typography>

                        <div className="item-structure">
                            <Grid container
                                  className="item-grid"
                                  justify="flex-end"
                                  spacing={0}
                                  direction="row"
                                  alignItems="center"
                            >
                                <Grid item xs={12} sm={12} md={6} lg={6}  className="item-column-left" style={styles.itemColumnLeft}>
                                    <Typography color="inherit" variant="body1" gutterBottom >
                                        Price: <strong>{price}</strong> was <strong className="item-price-strike">{originalPrice}</strong>
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={12} md={6} lg={6}  className="item-column-right" >
                                    <Typography color="inherit" variant="body1" gutterBottom style={styles.itemColumnRight}>
                                        Qty: 1
                                    </Typography>
                                </Grid>
                            </Grid>
                        </div>
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
    );
}

Item.propTypes = {
    price: PropTypes.number.isRequired,
    originalPrice: PropTypes.number.isRequired,
};

export default Item;