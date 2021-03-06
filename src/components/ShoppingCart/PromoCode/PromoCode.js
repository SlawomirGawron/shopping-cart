import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { promoCodeActionCreator } from 'src/store/actions/promoCodeActions';
import {getPromoCode} from "src/store/selectors/promoCodeSelectors";
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import PromoCodeInput from "src/components/ShoppingCart/PromoCode/PromoCodeInput/PromoCodeInput";
import InfoTooltip from "src/common/components/InfoTooltip/InfoTooltip";

import 'src/components/ShoppingCart/PromoCode/PromoCode.scss';

const styles = {
    promoTitle: {
        marginRight: '1rem',
    },
};

function PromoCode(props) {
    const { promoCodeActionCreator, isDisabled, giveDiscount, promoCode } = props;

    const handleChange = event => {
        promoCodeActionCreator(event.target.value);
    };

    return (
        <div className="promo-code">
            <ExpansionPanel className="promo-code-expansion-panel" >
                <ExpansionPanelSummary
                    className="promo-code-expansion-panel-summary"
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="promo-code-content"
                    id="promo-code-header"
                >

                    <Typography color="inherit" variant="body1" gutterBottom style={styles.promoTitle}>
                        Promo Code
                    </Typography>
                    <InfoTooltip hoverText={"discount"}/>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className="promo-code-expansion-panel-details">
                    <PromoCodeInput promoCode={promoCode} isDisabled={isDisabled} giveDiscount={giveDiscount} handleChange={handleChange}/>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </div>
    );
}

PromoCode.propTypes = {
    isDisabled: PropTypes.bool.isRequired,
    giveDiscount: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    promoCode: getPromoCode(state)
});

const mapDispatchToProps = {
    promoCodeActionCreator: promoCodeActionCreator,
};

export default connect(mapStateToProps, mapDispatchToProps)(PromoCode);