import React from 'react';

import FacebookLoginButton from 'react-facebook-login/dist/facebook-login';
import { useDispatch } from 'react-redux';

import { Button } from '@material-ui/core';

import config from '../../config';
import { facebookLogin } from '../../store/actions/usersActions';

const FacebookLogin = () => {
    const dispatch = useDispatch();

    const facebookResponse = response => {
        if(response.id) {
            dispatch(facebookLogin(response));
        }
    }
    return <FacebookLoginButton
        appId={config.fb.appId}
        fields="name,email,picture"
        render={renderProps => {
            return <Button
                onClick={renderProps.onClick}
            >
                Enter with facebook
            </Button>
        }}
        callback={facebookResponse}
    />;
};

export default FacebookLogin;