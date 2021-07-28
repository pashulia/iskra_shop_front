import React from 'react';

import { NotificationContainer } from 'react-notifications';
import { useSelector } from 'react-redux';
import {
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { Container } from '@material-ui/core';

import AppToolbar from './components/UI/AppToolbar/AppToolbar';
import Login from './containers/Login/Login';
import NewProduct from './containers/NewProduct/NewProduct';
import Products from './containers/Products/Products';
import Register from './containers/Register/Register';
import Catalog from "./components/UI/Catalog/Catalog";

const ProtectedRoute = ({isAllowed, redirectTo, ...props}) => {
    return isAllowed ?
        <Route {...props} /> :
        <Redirect to={redirectTo}/>
};

const App = () => {
    const user = useSelector(state => state.users.user);
    return (
        <>
            <AppToolbar/>
            <NotificationContainer />
            <main>
                <Container maxWidth="xl">
                    <Catalog/>
                    <Switch>
                        <ProtectedRoute
                            isAllowed={true}
                            redirectTo={"/login"}
                            path="/"
                            exact
                            component={Products}
                        />
                        <ProtectedRoute
                            isAllowed={user}
                            redirectTo={"/login"}
                            path="/products/new"
                            exact
                            component={NewProduct}
                        />
                        <ProtectedRoute
                            isAllowed={!user}
                            redirectTo={"/"}
                            path="/register"
                            exact
                            component={Register}
                        />
                        <ProtectedRoute
                            isAllowed={!user}
                            redirectTo={"/"}
                            path="/login"
                            exact
                            component={Login}
                        />
                    </Switch>
                </Container>
            </main>
        </>
    );
};

export default App;
