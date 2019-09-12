import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import 'src/common/CheckboxInput/CheckboxInput.scss';

function CheckboxInput(props) {
    const { updateStoreDiscountInStore } = props;

    const [state, setState] = useState({
        holidaySpecial: {
            checked: false,
            discount: -5
        },
        walkInSpecial: {
            checked: false,
            discount: -10
        },
    });

    const getTotalStoreDiscount = () => {
        let totalStoreDiscount = 0;

        if (state["holidaySpecial"]["checked"]) {
            totalStoreDiscount += state["holidaySpecial"]["discount"];
        }

        if (state["walkInSpecial"]["checked"]) {
            totalStoreDiscount += state["walkInSpecial"]["discount"];
        }

        updateStoreDiscountInStore(totalStoreDiscount);
    };

    const handleChange = special => event => {
        setState({
            ...state,
            [special]: {
                ...state[special],
                checked: event.target.checked
            }
        });
    };

    useEffect(() => {
        getTotalStoreDiscount();
    });

    return (
        <div className="checkbox-input-boxes">
            <FormGroup row>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={state.holidaySpecial.checked}
                            onChange={handleChange('holidaySpecial')}
                            value="holidaySpecial"
                            color="primary"
                        />
                    }
                    label="Holiday Special"
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={state.walkInSpecial.checked}
                            onChange={handleChange('walkInSpecial')}
                            value="walkInSpecial"
                            color="secondary"
                        />
                    }
                    label="Walk-In Special"
                />
            </FormGroup>
        </div>
    );
}

CheckboxInput.propTypes = {
    storeDiscount: PropTypes.number.isRequired,
    updateStoreDiscountInStore: PropTypes.func.isRequired
};

export default CheckboxInput;