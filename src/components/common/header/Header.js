import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import './Header.css';

class Header extends Component {
    render() {
        return (
            <div className="app-bar">
                <AppBar position="static">
                    <Toolbar>
                        <div className="logo"></div>
                        <Typography variant="title" color="inherit" className="flex">

                        </Typography>

                        <Button color="inherit" href='/liga'>Equipos</Button>
                        <Button color="inherit" href='/calendarios'>Calendarios</Button>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default Header;
