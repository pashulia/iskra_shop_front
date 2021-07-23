import React from 'react';

import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';

const AnonymousMenu = () => {
    return (
        <>
            <Button 
                component={Link} 
                to="/register" 
                color="#9e9e9e"
            >
                Регистрация
            </Button>
            <Button 
                component={Link} 
                to="/login" 
                color="#9e9e9e"
            >
                Войти
            </Button>
        </>
    );
};

export default AnonymousMenu;
