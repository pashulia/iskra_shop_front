import React, { useState } from 'react';

import {
  useDispatch,
  useSelector,
} from 'react-redux';

import FacebookLogin from '../../components/FacebookLogin/FacebookLogin';
import FormElement from '../../components/UI/Form/FormElement/FormElement';
import UserForm from '../../components/UserForm/UserForm';
import { createUser } from '../../store/actions/usersActions';

const Register = () => {
    const dispatch = useDispatch();
    const error = useSelector(state => state.users.registerError);

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
        await dispatch(createUser({...state}));
    };

    const getFieldError = fieldName => {
        try {
            return error.errors[fieldName].message;
        } catch(e) {
            return undefined;
        }
    };

    return (
        <>
            <UserForm
                onSubmit={submitFormHandler}
                title="Регистрация"
                buttonId="register"
            >
                <FormElement
                    name="username"
                    value={state.username}
                    onChange={inputChangeHandler}
                    error={getFieldError("username")}
                    label="Имя"
                    type="text"
                />
                <FormElement
                    name="password"
                    value={state.password}
                    onChange={inputChangeHandler}
                    error={getFieldError("password")}
                    label="Пароль"
                    type="password"
                />
            </UserForm>
            <FacebookLogin/>
        </>
    );
}

export default Register;
