import React, { useState } from 'react';

import {
  useDispatch,
  useSelector,
} from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import {
  Alert,
  AlertTitle,
} from '@material-ui/lab';

import FacebookLogin from '../../components/FacebookLogin/FacebookLogin';
import FormElement from '../../components/UI/Form/FormElement/FormElement';
import UserForm from '../../components/UserForm/UserForm';
import { loginUser } from '../../store/actions/usersActions';

const useStyles = makeStyles(() => ({
    alert: {
        width: '100%',
    },
}));

const Login = () => {
    const classes = useStyles()
    const dispatch = useDispatch();
    const error = useSelector(state => state.users.loginError);

    const [state, setState] = useState({
        username: "",
        password: ""
    });

    const inputChangeHandler = e => {
        const {name, value} = e.target;
        setState(prevState => {
            return {...prevState, [name]: value};
        });
    };

    const submitFormHandler = async e => {
        e.preventDefault();
        await dispatch(loginUser({...state}));
    };
    return (
        <>
            <UserForm
                onSubmit={submitFormHandler}
                title="Вход"
                buttonId="login"
            >
                {error && <Alert
                    severity="error"
                    className={classes.alert}
                >
                    <AlertTitle>Error</AlertTitle>
                    {error.response.data.error}
                </Alert>}
                <FormElement
                    name="username"
                    value={state.username}
                    onChange={inputChangeHandler}
                    label="Имя"
                    type="text"
                />
                <FormElement
                    name="password"
                    value={state.password}
                    onChange={inputChangeHandler}
                    label="Пароль"
                    type="password"
                />
            </UserForm>
            <FacebookLogin/>
        </>
    );
}

export default Login;
