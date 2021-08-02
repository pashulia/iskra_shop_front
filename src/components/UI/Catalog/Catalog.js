import './Catalog.module.css';

import React from 'react';

import Button from '@material-ui/core/Button';
import ListItemText from '@material-ui/core/ListItemText';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';

const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
    },
})((props) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
));

const StyledMenuItem = withStyles((theme) => ({
    root: {
        '&:focus': {
            backgroundColor: theme.palette.primary.main,
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: theme.palette.common.white,
            },
        },
    },
}))(MenuItem);

export default function Catalog() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className={c.wrap}>
            <Button
                aria-controls="customized-menu"
                aria-haspopup="true"
                variant="contained"
                color="primary"
                onClick={handleClick}
            >
                <MenuRoundedIcon fontSize="large"/>
                Каталог автозапчастей
            </Button>
            <StyledMenu
                id="customized-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <StyledMenuItem>
                    <ListItemText primary="Свечи"/>
                </StyledMenuItem>
                <StyledMenuItem>
                    <ListItemText primary="Провода"/>
                </StyledMenuItem>
                <StyledMenuItem>
                    <ListItemText primary="Тормозные колодки"/>
                </StyledMenuItem>
                <StyledMenuItem>
                    <ListItemText primary="Ремни"/>
                </StyledMenuItem>
                <StyledMenuItem>
                    <ListItemText primary="Ролики"/>
                </StyledMenuItem>
                <StyledMenuItem>
                    <ListItemText primary="Наконечники и катушки зажигания"/>
                </StyledMenuItem>
            </StyledMenu>
        </div>
    );
}