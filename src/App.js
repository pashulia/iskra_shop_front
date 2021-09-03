import React from 'react';

import {NotificationContainer} from 'react-notifications';
import {useSelector} from 'react-redux';
import {
    Redirect,
    Route,
    Switch,
} from 'react-router-dom';

import {Container} from '@material-ui/core';

import AppToolbar from './components/UI/AppToolbar/AppToolbar';
import Catalog from './components/UI/Catalog/Catalog';
import Footer from './components/UI/Footer/Footer';
import InfoBlock from './components/UI/InfoBlock/InfoBlock';
import PromoBlock from './components/UI/PromoBlock/PromoBlock';
import Login from './pages/Login/Login';
import NewProduct from './pages/NewProduct/NewProduct';
import Products from './pages/Products/Products';
import Register from './pages/Register/Register';
import SparkPlugProductTabs from "./components/UI/ProductTabs/SparkPlugProductTabs";
import BrakePadsProductTabs from "./components/UI/ProductTabs/BrakePadsProductTabs";
import WiresProductTabs from "./components/UI/ProductTabs/WiresProductTabs";
import "./App.css"
import PopularProductTabs from "./components/UI/ProductTabs/PopularProductTabs";

const ProtectedRoute = ({isAllowed, redirectTo, ...props}) => {
    return isAllowed ?
        <Route {...props} /> :
        <Redirect to={redirectTo}/>
};

const App = () => {
    const user = useSelector(state => state.users.user);
    return (
        <div>
            <AppToolbar/>
            <NotificationContainer/>
            <main>
                <Container maxWidth="xl">
                    <InfoBlock/>
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
                    <div className="App">
                        <div>
                            <Catalog/>
                            <PopularProductTabs/>
                        </div>
                        <div className="app-content">
                            <PromoBlock/>
                            <SparkPlugProductTabs/>
                            <BrakePadsProductTabs/>
                            <WiresProductTabs/>
                        </div>
                    </div>
                    <ProtectedRoute
                        isAllowed={true}
                        redirectTo={"/login"}
                        path="/"
                        exact
                        component={Products}
                    />
                </Container>
            </main>
            <Footer/>
        </div>
    );
};

export default App;
