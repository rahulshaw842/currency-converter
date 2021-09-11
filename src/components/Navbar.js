import { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import CompareIcon from '@material-ui/icons/Compare';
import FunctionsIcon from '@material-ui/icons/Functions';
import { Link } from "react-router-dom"

export default function Navbar() {
    const [isSideBarOpen, setisSideBarOpen] = useState(false);

    return (
        <>
            <AppBar position="static" className="margin-bottom">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => setisSideBarOpen(true)}>
                        <MenuIcon />
                    </IconButton>
                    <Link to='/'>
                        <Typography variant="h6">
                            Currency Converter
                        </Typography>
                    </Link>
                </Toolbar>
            </AppBar>
            <SwipeableDrawer
                anchor='left'
                open={isSideBarOpen}
                onClose={() => setisSideBarOpen(false)}
                onOpen={() => null}
            >
                <List>
                    <Link to='/'>
                        <ListItem button>
                            <ListItemIcon><HomeIcon /></ListItemIcon>
                            <ListItemText primary="Home" />
                        </ListItem>
                    </Link>
                    <Link to='/currency-list-converter'>
                        <ListItem button>
                            <ListItemIcon><MonetizationOnIcon /></ListItemIcon>
                            <ListItemText primary="Currency List" />
                        </ListItem>
                    </Link>
                    <Link to='/currency-compare'>
                        <ListItem button>
                            <ListItemIcon><CompareIcon /></ListItemIcon>
                            <ListItemText primary="Currency Compare" />
                        </ListItem>
                    </Link>
                    <Link to='/currency-operations'>
                        <ListItem button>
                            <ListItemIcon><FunctionsIcon /></ListItemIcon>
                            <ListItemText primary="Currency Operations" />
                        </ListItem>
                    </Link>
                </List>
            </SwipeableDrawer>
        </>
    );
}