import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import 'src/common/CheckboxInput/CheckboxInput.scss';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    formControl: {
    },
}));

function CheckboxInput(props) {
    const classes = useStyles();
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
        <div className={classes.root}>
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
    storeDiscount: PropTypes.number.isRequired,
    updateStoreDiscountInStore: PropTypes.func.isRequired
};

export default CheckboxInput;