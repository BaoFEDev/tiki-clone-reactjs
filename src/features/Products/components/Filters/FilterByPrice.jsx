import { makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Controller, useForm } from "react-hook-form";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    inputGroup: {
        display: 'flex',
        alignItems: 'center',
        '& input': {
            marginRight: theme.spacing(1),
            width: '95px',
            height: '30px',
            padding: '0px 8px',
            background: 'rgb(255, 255, 255)',
            borderRadius: '4px',
            textAlign: 'left',
            border: '1px solid rgb(184, 184, 184)',
            'outline': '0px',
            fontSize: '13px'
        }
    },
    formPrice: {
        marginTop: '10px'
    },
    buttonSubmit: {
        width: '90px',
        height: '27px',
        textAlign: 'center',
        borderRadius: '4px',
        border: '1px solid rgb(13, 92, 182)',
        'outline': '0px',
        fontSize: '13px',
        padding: '0px 8px',
        color: 'rgb(13, 92, 182)',
        background: 'rgb(255, 255, 255)',
        marginTop: '10px',
        cursor: 'pointer'
    }
}));
const FilterByPrice = props => {
    const { onChange } = props;
    const classes = useStyles();
    const form = useForm({
        defaultValues: {
            salePrice_gte: '',
            salePrice_lte: '',
        }
    });
    const onSubmit = (values) => {
        if (onChange) {
            onChange(values)
        }
        form.reset();
    }
    return (
        <>
            <h5>GIÁ</h5>
            <form onSubmit={form.handleSubmit(onSubmit)} className={classes.formPrice}>
                <div className={classes.inputGroup}>
                    <Controller
                        as={<input />}
                        name="salePrice_gte"
                        control={form.control}
                    />
                    <span>-</span>
                    <Controller
                        as={<input />}
                        name="salePrice_lte"
                        control={form.control}
                        style={{ marginLeft: '8px' }}
                    />
                </div>
                <button className={classes.buttonSubmit} type="submit">
                    Áp dụng
                </button>
            </form>
        </>
    )
}

FilterByPrice.propTypes = {
    onChange: PropTypes.func.isRequired
}

export default FilterByPrice
