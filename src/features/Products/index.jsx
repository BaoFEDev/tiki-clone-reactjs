import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import ListPage from './pages/ListPage';

const ProductFeature = props => {
    let match = useRouteMatch();
    return (
        <>
            <Switch>
                <Route to={match.url} exact component={ListPage} />
            </Switch>
        </>
    )
}

ProductFeature.propTypes = {

}

export default ProductFeature
