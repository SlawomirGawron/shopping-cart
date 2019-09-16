import React from 'react';
import PropTypes from 'prop-types';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Tooltip from '@material-ui/core/Tooltip';
import InfoIcon from '@material-ui/icons/Info';

import 'src/components/ShoppingCart/StoreDiscount/StoreDiscount.scss';

const styles = {
    storeDiscountColumnLeftText: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        color: 'black',
        marginLeft: '1rem'
    },

    storeDiscountColumnRight: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        color: 'black',
    },

    info: {
        color: 'blue',
    }
};

const hoverText = "Discount applied based on Holiday Special or Walk-In Special selection.";

function StoreDiscount(props) {
    const { storeDiscount } = props;

    return (
        <div className="store-discount">
            <Grid container
                  className="store-discount-grid"
                  justify="flex-end"
                  spacing={0}
                  direction="row"
                  alignItems="center"
            >
                <Grid item xs={6} sm={6} md={6} lg={6}  className="store-discount-column-left"  >
                    <Tooltip title={hoverText} style={styles.info}>
                        <InfoIcon />
                    </Tooltip>
                    <Typography color="inherit" variant="body1" gutterBottom style={styles.storeDiscountColumnLeftText}>
                        Store Discount
                    </Typography>
                </Grid>
                <Grid item xs={6} sm={6} md={6} lg={6}  className="store-discount-column-right" >
                    <Typography color="inherit" variant="body1" gutterBottom style={styles.storeDiscountColumnRight}>
                        {storeDiscount}
                    </Typography>
                </Grid>
            </Grid>
        </div>
    );
}

StoreDiscount.propTypes = {
    storeDiscount: PropTypes.number.isRequired,
};

export default StoreDiscount;