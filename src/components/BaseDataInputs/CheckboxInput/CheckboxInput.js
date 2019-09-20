import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import 'src/components/BaseDataInputs/CheckboxInput/CheckboxInput.scss';

const useStyles = makeStyles(theme => ({
    checkboxInput: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        flex: "1",
    },
    formControl: {
    },
}));

function CheckboxInput(props) {
    const classes = useStyles();
    const { total, updateStoreDiscountInStore } = props;

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
        let balance = total;
        let isChecked = event.target.checked;
        const entries = Object.entries(state);

        if (isChecked) {
            for (const [key, value] of entries) {
                if (key !== special) {
                    if (value["checked"]) {
                        balance += value["discount"];
                    }
                }
            }

            balance += state[special]["discount"];

            if (balance <= 0) {
                isChecked = !isChecked;
            }
        }

        setState({
            ...state,
            [special]: {
                ...state[special],
                checked: isChecked
            }
        });
    };

    useEffect(() => {
        getTotalStoreDiscount();
    });

    return (
        <div className={classes.checkboxInput}>
            <FormLabel component="legend">Store Discount</FormLabel>
            <FormControl component="fieldset" className={classes.formControl}>
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
            </FormControl>
        </div>
    );
}

CheckboxInput.propTypes = {
    total: PropTypes.number.isRequired,
    storeDiscount: PropTypes.number.isRequired,
    updateStoreDiscountInStore: PropTypes.func.isRequired
};

export default CheckboxInput;