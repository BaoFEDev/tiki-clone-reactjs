import { Box, Container, Grid, makeStyles } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import React, { useEffect, useState } from 'react';
import categoryApi from '../../../api/categoryApi';
import productApi from '../../../api/productApi';
import SortTabs from '../../../components/Tabs/SortTabs';
import FilterViewer from '../components/Filters/FilterViewer';
import ProductFilter from '../components/ProductFilter';
import ProductList from '../components/ProductList';
import ProductSkeletons from '../components/ProductSkeletons';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    control: {
        padding: theme.spacing(2),
    },
    floatRight: {
        float: 'right !important'
    },
    pagination: {
        width: '100%'
    },
    rightCol: {
        borderLeft: '1px solid #f3e9e9 !important',
        backgroundColor: '#fff'
    },
    leftCol: {
        backgroundColor: '#fff'
    }
}));
const ListPage = props => {
    const [product, setProduct] = useState([]);

    const [loading, isLoading] = useState(true);
    const [pagination, setPagination] = useState({
        _page: 1,
        _limit: 10,
        _total: 10
    });
    const [filters, setFilters] = useState({
        _page: 1,
        _limit: 10,
        _sort: 'salePrice:ASC'
    });

    useEffect(() => {
        (async () => {
            try {
                const { data, pagination } = await productApi.getAll(filters);
                setProduct(data);
                setPagination(pagination);
            } catch (error) {
                console.log(error);
            }
            isLoading(false)
        })();
    }, [filters]);

    const classes = useStyles();
    const handlePageChange = (e, _page) => {
        setFilters(prevFilters => ({
            ...prevFilters,
            _page: _page
        }));
    };
    const handleSortChange = (newSortValue) => {
        setFilters(prevFilters => ({
            ...prevFilters,
            _sort: newSortValue
        }));
    };
    const handleFilterChange = (newFilterValue) => {
        setFilters(prevFilters => ({
            ...prevFilters,
            ...newFilterValue
        }));
    };
    const handleViewerFilter = (newFilterValue) => {
        setFilters(newFilterValue);
    }

    return (
        <Container maxWidth="lg" style={{ marginTop: '20px' }}>
            <Grid container spacing={2}>
                <Grid item xs={3} className={classes.leftCol}>
                    <Box>
                        <ProductFilter onChange={handleFilterChange} filters={filters} />
                    </Box>
                </Grid>
                <Grid item xs={9} className={classes.rightCol}>
                    <SortTabs currentSort={filters._sort} onChange={handleSortChange} />
                    <FilterViewer onChange={handleViewerFilter} filters={filters} />
                    {loading ? <ProductSkeletons length={8} /> : <ProductList data={product} />}
                </Grid>
                <div className={classes.pagination}>
                    <Pagination
                        className={classes.floatRight}
                        count={Math.ceil(pagination._total / pagination._limit)}
                        page={pagination._page}
                        onChange={handlePageChange}
                        color="primary" />
                </div>
            </Grid>
        </Container>
    )
}

ListPage.propTypes = {

}

export default ListPage
