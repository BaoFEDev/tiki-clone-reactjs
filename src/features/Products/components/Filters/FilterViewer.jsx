import React from 'react'
import PropTypes from 'prop-types'
import { Chip, makeStyles } from '@material-ui/core'

const useStyle = makeStyles((theme) => ({
    chipList: {
        margin: '8px 0',
        width: '100%',
        float: 'left',
        '& li': {
            float: 'left',
            marginRight: '10px'
        }
    }
}));
const FILTER_LIST = [
    {
        id: 1,
        getLabel: 'Giao hàng miễn phí',
        isActive: () => true,
        isVisible: () => true,
        isRemovable: () => false,
        onToggle: (filters) => { },
        onDelete: (filters) => { }
    },
    {
        id: 2,
        getLabel: '',
        isActive: () => true,
        isVisible: () => true,
        isRemovable: () => false,
        onToggle: (filters) => { },
        onDelete: (filters) => { }
    },
    {
        id: 3,
        getLabel: '',
        isActive: () => true,
        isVisible: () => true,
        isRemovable: () => false,
        onToggle: (filters) => { },
        onDelete: (filters) => { }
    }
]
const FilterViewer = props => {
    const classes = useStyle();
    const { onChange, filters = {} } = props
    const handleDelete = () => {
    };

    const handleClick = () => {
    };
    return (
        <>
            <ul className={classes.chipList}>
                <li>
                    <Chip label="Clickable" color="primary" />
                </li>
            </ul>
        </>
    )
}

FilterViewer.propTypes = {
    onChange: PropTypes.func,
    filters: PropTypes.object.isRequired
}

export default FilterViewer
