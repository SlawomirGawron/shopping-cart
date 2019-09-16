import React from 'react';
import PropTypes from 'prop-types';
import Item from 'src/components/ItemDetails/Item/Item';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';

import 'src/components/ItemDetails/ItemDetails.scss';

function ItemDetails(props) {
    const { price } = props;

    return (
        <div className="item-details">
            <ExpansionPanel className="item-details-expansion-panel">
                <ExpansionPanelSummary
                    className="item-details-expansion-panel-summary"
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="item-detials-content"
                    id="item-details-header"
                >
                    <Typography color="inherit" variant="body1" gutterBottom>Item Details</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className="item-details-expansion-panel-details">
                    <Item price={price} originalPrice={price + (price * 0.10)}/>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </div>
    );
}

ItemDetails.propTypes = {
    price: PropTypes.number.isRequired,
};

export default ItemDetails;
