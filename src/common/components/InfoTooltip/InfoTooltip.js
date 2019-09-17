import React from 'react';
import PropTypes from 'prop-types';
import Tooltip from '@material-ui/core/Tooltip';
import InfoIcon from '@material-ui/icons/Info';

import 'src/common/components/InfoTooltip/InfoToolTip.scss';

const styles = {
    info: {
        color: 'blue',
    }
};

function InfoTooltip(props) {
    const { hoverText } = props;

    return (
        <div className="info-tooltip">
            <Tooltip title={hoverText} style={styles.info}>
                <InfoIcon />
            </Tooltip>
        </div>
    );
}

InfoTooltip.propTypes = {
    hoverText: PropTypes.string.isRequired,
};

export default InfoTooltip;