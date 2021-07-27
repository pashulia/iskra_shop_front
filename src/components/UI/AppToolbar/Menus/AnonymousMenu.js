import React from 'react';

import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import grey from '@material-ui/core/colors/grey';

const secondary = grey[500];
const AnonymousMenu = () => {
    return (
        <>
            <Button 
                component={Link} 
                to="/register" 
                color="secondary"
            >
                Регистрация
            </Button>
            <Button 
                component={Link} 
                to="/login" 
                color="secondary"
            >
                Войти
            </Button>
        </>
    );
};

export default AnonymousMenu;
