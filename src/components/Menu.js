import React from 'react';
import { NavLink } from 'react-router-dom';
import {
    makeStyles,
    Drawer,
    AppBar,
    CssBaseline,
    Toolbar,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Typography,
} from '@material-ui/core';

import { Home, AcUnit, Timeline, Alarm } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        backgroundColor: '#AC27F5'
    },
    drawer: {
        width: 300,
        flexShrink: 0,
    },
    drawerPaper: {
        width: 300,
    },
    drawerContainer: {
        overflow: 'auto',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    route: {
        color: '#813BF7',
    }
}));

const Menu = ({ children }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" noWrap>
                        Acompanhamento de Temperatura
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{paper: classes.drawerPaper }}>
                <Toolbar />
                <div className={classes.drawerContainer}>
                    <List>
                        <ListItem component={NavLink}
                            exact
                            to='/'
                            className={classes.route}>
                            <ListItemIcon>
                                <Home />
                            </ListItemIcon>
                            <ListItemText primary={'Home'} />
                        </ListItem>
                        <ListItem component={NavLink}
                            exact
                            to='/temperatura-atual'
                            className={classes.route}>
                            <ListItemIcon>
                                <AcUnit />
                            </ListItemIcon>
                            <ListItemText primary={'Temperatura Atual'} />
                        </ListItem>
                        <ListItem component={NavLink}
                            exact
                            to='/historico-temperaturas'
                            className={classes.route}>
                            <ListItemIcon>
                                <Timeline />
                            </ListItemIcon>
                            <ListItemText primary={'Histórico de Temperaturas'} />
                        </ListItem>
                        <ListItem component={NavLink}
                            exact
                            to='/alarmes'
                            className={classes.route}>
                            <ListItemIcon>
                                <Alarm />
                            </ListItemIcon>
                            <ListItemText primary={'Alarmes'} />
                        </ListItem>
                    </List>
                </div>
            </Drawer>
            <main className={classes.content}>
                <Toolbar />
                {children}
            </main>
        </div>
    );
}

export default Menu;