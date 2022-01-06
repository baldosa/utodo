import React, { Component } from 'react'
import { Container, Typography, Box, Link, Toolbar, Button, IconButton, AppBar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

class mainMenu extends Component {
  render() {
    return (
      <AppBar color="default" position="static">
        <Toolbar >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            uTodo
          </Typography>
          <Button color="inherit">Login</Button> or <Button color="inherit">Register</Button>
        </Toolbar>
      </AppBar>
    )
  }
}

export default mainMenu;
