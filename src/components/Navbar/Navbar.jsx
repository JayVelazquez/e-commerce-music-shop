import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';

import logo from '../../assets/logo.webp';
import useStyles from './styles';

const Navbar = ( { totalItems }) => {  
    const classes = useStyles();
    const location = useLocation();
    
    
    return (
        <>
            <AppBar position='fixed' className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography component={Link} to="/" variant="h5" fontWeight="bold" className={classes.title} color="inherit">
                        <img src={logo} width="50px" height="50px" alt="Music Shop Logo" className={classes.image} />
                        Music Shop
                    </Typography>
                    <div className={classes.grow} />
                    {location.pathname === '/' && (
                    <div className={classes.button}>
                        <IconButton component={Link} to="/cart" arial-label="Show cart items" color="inherit">
                            <Badge badgeContent={totalItems} color="secondary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </div> )}
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar
