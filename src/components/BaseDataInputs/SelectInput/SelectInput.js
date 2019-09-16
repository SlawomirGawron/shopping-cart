import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import 'src/components/BaseDataInputs/SelectInput/SelectInput.scss';

const useStyles = makeStyles(theme => ({
    selectInput: {
        display: "flex",
        flex: "1",
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

function SelectInput(props) {
    const classes = useStyles();
    const { province, updateProvinceInStore } = props;

    function handleChange(event) {
        updateProvinceInStore(event.target.value);
    }

    return (
        <div className={classes.selectInput}>
            <FormControl className={classes.formControl}>
                <InputLabel shrink htmlFor="province-label-placeholder">
                    Provinces
                </InputLabel>
                <Select
                    value={province}
                    onChange={handleChange}
                    input={<Input name="province" id="province-label-placeholder" />}
                    displayEmpty
                    name="province"
                    className={classes.selectEmpty}
                >
                    <MenuItem value="ab">Alberta</MenuItem>
                    <MenuItem value="bc">British Columbia</MenuItem>
                    <MenuItem value="mb">Manitoba</MenuItem>
                    <MenuItem value="nb">New Brunswick</MenuItem>
                    <MenuItem value="nl">Newfoundland and Labrador</MenuItem>
                    <MenuItem value="ns">Nova Scotia</MenuItem>
                    <MenuItem value="nt">Northwest Territories</MenuItem>
                    <MenuItem value="nu">Nunavut</MenuItem>
                    <MenuItem value="on">Ontario</MenuItem>
                    <MenuItem value="pe">Prince Edward Island</MenuItem>
                    <MenuItem value="qc">Quebec</MenuItem>
                    <MenuItem value="sk">Saskatchewan</MenuItem>
                    <MenuItem value="yt">Yukon</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}

SelectInput.propTypes = {
    province: PropTypes.string.isRequired,
    updateProvinceInStore: PropTypes.func.isRequired
};

export default SelectInput;