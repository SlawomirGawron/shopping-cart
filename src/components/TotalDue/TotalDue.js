import React from 'react';
import PropTypes from 'prop-types';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import 'src/components/TotalDue/TotalDue.scss';

const styles = {
    totalColumnLeft: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        color: 'black',
    },

    totalColumnRight: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        color: 'black',
        borderTop: '2px solid',
    }
};


function TotalDue(props) {
    const { total } = props;

    return (
        <div className="total-due">
            <Grid container
                  className="total-due-grid"
                  justify="flex-end"
                  spacing={0}
                  direction="row"
                  alignItems="center"
            >
                <Grid item xs={12} sm={12} md={6} lg={6}  className="total-due-column-left"  >
                    <Typography color="inherit" variant="body1" gutterBottom style={styles.totalColumnLeft}>
                        Total
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}  className="total-due-column-right" >
                    <Typography color="inherit" variant="body1" gutterBottom style={styles.totalColumnRight}>
                        $ {total}
                    </Typography>
                </Grid>
            </Grid>
        </div>
    );
}

TotalDue.propTypes = {
    total: PropTypes.number.isRequired,
};

export default TotalDue;