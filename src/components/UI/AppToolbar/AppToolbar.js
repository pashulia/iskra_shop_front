import './AppToolbar.css';

import React from 'react';

import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import {
  AppBar,
  Grid,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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

    return (
        <>
            <AppBar position="fixed">
                <Toolbar>
                    <Grid container justifyContent="space-between" alignItems="center">
                        <Typography variant="h5">
                            <Link className={classes.mainLink} to="/">
                                Добро пожаловать в AvtoIskra!
                            </Link>
                        </Typography>
                        <Grid item>
                            {
                                user ? <UserMenu user={user}/> : <AnonymousMenu/>
                            }
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <Toolbar className={classes.staticToolbar}/>
        </>
    );
};

export default AppToolbar;
