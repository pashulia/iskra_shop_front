import React from 'react';

import PropTypes from 'prop-types';

import {
  Grid,
  MenuItem,
  TextField,
} from '@material-ui/core';

;

const FormElment = (props) => {
    let textFieldChildren = null
    if (props.type === "select") {
        textFieldChildren = props.options.map((options) => {
            return <MenuItem 
                selected={options._id === "609a8b0fded55ecf1319479e"} 
                key={options._id} 
                value={options._id}
            >
                {options.title}
            </MenuItem>
        })
    }

    return (
        <Grid item xs={12}>
            <TextField
                variant="outlined"
                fullWidth
                required={props.required}
                id={props.name}
                select={props.type === "select"}
                type={props.type}
                multiline={props.multiline}
                rows={3}
                label={props.label}
                name={props.name}
                autoComplete={props.name}
                value={props.value}
                onChange={props.onChange}
                error={!!props.error}
                helperText={props.error}
            >
                {textFieldChildren}
            </TextField>
        </Grid>
    );
};

FormElment.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired,
    required: PropTypes.bool,  
    multiline: PropTypes.bool,
    error: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.object)   
};

export default FormElment;