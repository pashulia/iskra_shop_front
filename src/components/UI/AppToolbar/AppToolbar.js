import './AppToolbar.css';

import React from 'react';

import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import {
  Grid,
  Toolbar,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Logo from '../../../assets/logo/AutoIskra-logo.png';
import InfoBlock from './HeaderInfoBlock/InfoBlock/InfoBlock';
import AnonymousMenu from './Menus/AnonymousMenu';
import UserMenu from './Menus/UserMenu';

const useStyles = makeStyles(theme => {
    return {
        mainLink: {
            color: "#9e9e9e",
            textDecoration: "none",
            "&:hover": {
                color: "#ccc"
            }
        },
        staticToolbar: {
            marginBottom: theme.spacing(2)
        }
    };
});

const AppToolbar = () => {
    const classes = useStyles();
    const user = useSelector(state => state.users.user);
    const logo = Logo;
    return (
        <>
            <Toolbar>
                <Grid container justifyContent="space-between" alignItems="center">
                    <InfoBlock/>
                    <Link className={classes.mainLink} to="/">
                        <img width="230" src={logo} alt="logo" className={classes.logo}/>
                    </Link>
                    <Grid item>
                        {
                            user ? <UserMenu user={user}/> : <AnonymousMenu/>
                        }
                    </Grid>
                </Grid>
            </Toolbar>
        </>
    );
};

export default AppToolbar;