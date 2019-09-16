import React from 'react';
import PropTypes from 'prop-types';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import 'src/components/ShoppingCart/SalesTax/SalesTax.scss';

const styles = {
    taxesColumnLeft: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        color: 'black',
    },

    taxesColumnRight: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        color: 'black',
    }
};

function SalesTax(props) {
    const { taxes, province } = props;

    const capitalizeString = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    return (
        <div className="taxes">
            <Grid container
                  className="taxes-grid"
                  justify="flex-end"
                  spacing={0}
                  direction="row"
                  alignItems="center"
            >
                <Grid item xs={6} sm={6} md={6} lg={6}  className="taxes-column-left"  >
                    <Typography color="inherit" variant="body1" gutterBottom style={styles.taxesColumnLeft}>
                        Taxes for {capitalizeString(province)}.
                    </Typography>
                </Grid>
                <Grid item xs={6} sm={6} md={6} lg={6}  className="taxes-column-right" >
                    <Typography color="inherit" variant="body1" gutterBottom style={styles.taxesColumnRight}>
                        {taxes}
                    </Typography>
                </Grid>
            </Grid>
        </div>
    );
}

SalesTax.propTypes = {
    taxes: PropTypes.number.isRequired,
    province: PropTypes.string.isRequired,
};

export default SalesTax;