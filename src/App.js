import './App.scss';

import React from 'react';

import {NotificationContainer} from 'react-notifications';
import {useSelector} from 'react-redux';
import {
    Redirect,
    Route,
    Switch,
} from 'react-router-dom';

import {
    Container,
    Divider,
} from '@material-ui/core';

import AppToolbar from './components/UI/AppToolbar/AppToolbar';
import Footer from './components/UI/Footer/Footer';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import NewProduct from './pages/NewProduct/NewProduct';
import Products from './pages/Products/Products';
import Register from './pages/Register/Register';

const ProtectedRoute = ({isAllowed, redirectTo, ...props}) => {
    return isAllowed ?
        <Route {...props} /> :
        <Redirect to={redirectTo}/>
};

const App = () => {
    const user = useSelector(state => state.users.user);
    return (
        <div className="box">
            <Container maxWidth="xl">
                <NotificationContainer/>
                <AppToolbar/>
                {/*<Divider className="dividerline" style={{backgroundColor: 'blue', height: '2px'}} variant="middle"/>*/}
                <Main>
                    <Switch>
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
                    <ProtectedRoute
                        isAllowed={true}
                        redirectTo={"/login"}
                        path="/"
                        exact
                        component={Main}
                    />
                    <ProtectedRoute
                        isAllowed={true}
                        redirectTo={"/login"}
                        path="/products"
                        exact
                        component={Products}
                    />
                </Main>
                <Footer/>
            </Container>
        </div>
    );
};

export default App;