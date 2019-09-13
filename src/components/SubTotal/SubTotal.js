import React from 'react';
import PropTypes from 'prop-types';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import 'src/components/SubTotal/SubTotal.scss';

const styles = {
    subTotalColumnLeft: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        color: 'black',
    },

    subTotalColumnRight: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        color: 'black',
    }
};

function SubTotal(props) {
    const { total } = props;

    return (
        <div className="sub-total">
            <Grid container
                  className="sub-total-grid"
                  justify="flex-end"
                  spacing={0}
                  direction="row"
                  alignItems="center"
            >
                <Grid item xs={12} sm={12} md={6} lg={6}  className="sub-total-column-left"  >
                    <Typography color="inherit" variant="body1" gutterBottom style={styles.subTotalColumnLeft}>
                        Subtotal
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}  className="sub-total-column-right" >
                    <Typography color="inherit" variant="body1" gutterBottom style={styles.subTotalColumnRight}>
                        {total}
                    </Typography>
                </Grid>
            </Grid>
        </div>
    );
}

SubTotal.propTypes = {
    total: PropTypes.number.isRequired,
};

export default SubTotal;