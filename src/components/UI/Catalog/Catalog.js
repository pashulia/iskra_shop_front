import React from 'react';

import { Link } from 'react-router-dom';

import {
  Collapse,
  List,
} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import {
  blue,
  green,
  grey,
  orange,
  purple,
  red,
} from '@material-ui/core/colors';
import ListItemText from '@material-ui/core/ListItemText';
import { styled } from '@material-ui/core/styles';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

import c from './Catalog.module.css';

const BreakeButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
        backgroundColor: purple[700],
    },
}));

const SparkButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(red[500]),
    backgroundColor: red[500],
    '&:hover': {
        backgroundColor: red[700],
    },
}));

const BeldButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(blue[500]),
    backgroundColor: blue[500],
    '&:hover': {
        backgroundColor: blue[700],
    },
}));

const RollButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(green[400]),
    backgroundColor: green[400],
    '&:hover': {
        backgroundColor: green[700],
    },
}));

const WiresButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(orange[400]),
    backgroundColor: orange[400],
    '&:hover': {
        backgroundColor: orange[700],
    },
}));

const OtherButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(grey[400]),
    backgroundColor: grey[400],
    '&:hover': {
        backgroundColor: grey[700],
    },
}));

export default function Catalog() {
    
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <div className={c.wrap}>
            <List 
                sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                component="nav"
                aria-labelledby="nested-list-subheader"
            >
                <Button onClick={handleClick} >
                    <ListItemText primary="Каталог автозапчастей" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </Button>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <SparkButton sx={{ pl: 4 }} >
                            <Link to="/products">
                                <ListItemText className="link" primary="Свечи"/>
                            </Link>
                        </SparkButton>
                        <WiresButton sx={{ pl: 4 }} >
                            <ListItemText primary="Провода" />
                        </WiresButton>
                        <BreakeButton variant="contained">
                            <ListItemText primary="Тормозные колодки" />
                        </BreakeButton>
                        <BeldButton sx={{ pl: 4 }}>
                            <ListItemText primary="Ремни" />
                        </BeldButton>
                        <RollButton sx={{ pl: 4 }}>
                            <ListItemText primary="Ролики" />
                        </RollButton>
                        <OtherButton sx={{ pl: 4 }}>
                            <ListItemText primary="Наконечники и катушки зажигания" />
                        </OtherButton>
                    </List>
                </Collapse>
            </List>           
        </div>
    );
}