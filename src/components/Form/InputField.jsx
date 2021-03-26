import React from "react";
import PropTypes from "prop-types";
import { Controller } from "react-hook-form";
import { TextField } from "@material-ui/core";

const InputField = (props) => {
    const { name, form, label, disabled } = props;
    const { errors } = form;
    const hasError = errors[name];
    return (
        <>
            <Controller
                name={name}
                control={form.control}
                as={TextField}
                margin="normal"
                variant="outlined"
                label={label}
                error={hasError}
                helperText={errors[name]?.message}
                disabled={disabled}
                fullWidth
            />
        </>
    );
};

InputField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    disabled: PropTypes.bool
};

export default InputField;
