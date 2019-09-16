import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

import 'src/components/BaseDataInputs/TextFieldInput/TextFieldInput.scss';

const styles = {
    textFieldInput: {
        display: "flex",
        flex: "1",
    },
};


function TextFieldInput(props) {
    const { total, updateTotalInStore } = props;

    const handleChange = (event) => {
        updateTotalInStore(parseInt(event.target.value));
    };

    return (
        <div className="text-field-input">
            <TextField
                id="outlined-number-input-box"
                label="Enter Total"
                value={total}
                onChange={handleChange}
                type="number"
                className="outlined-number-input-box"
                InputLabelProps={{
                    shrink: true,
                }}
                margin="normal"
                variant="outlined"
                style={styles.textFieldInput}
            />
        </div>
    );
}

TextFieldInput.propTypes = {
    total: PropTypes.number.isRequired,
    updateTotalInStore: PropTypes.func.isRequired
};

export default TextFieldInput;