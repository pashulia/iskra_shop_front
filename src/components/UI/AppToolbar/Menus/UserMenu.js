import React, { useState } from 'react';

import { useDispatch } from 'react-redux';

import {
  Button,
  Fade,
  Menu,
  MenuItem,
} from '@material-ui/core';

import { logoutUser } from '../../../../store/actions/usersActions';

const UserMenu = ({user}) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const dispatch = useDispatch();

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const logout = () => {
        dispatch(logoutUser());
    };

    return (
        <>
            <Button
                aria-controls="fade-menu"
                aria-haspopup="true"
                onClick={handleClick}
                color="inherit"
            >
                Привет, {user.username}
            </Button>
            <Menu
                id="fade-menu"
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
            >
                <MenuItem>Profile</MenuItem>
                <MenuItem onClick={logout}>Logout</MenuItem>
            </Menu>
        </>
    );
};

export default UserMenu;
