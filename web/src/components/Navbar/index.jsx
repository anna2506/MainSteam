import React from 'react';
import {
  AppBar, Toolbar, Button,
} from '@material-ui/core';

const Navbar = () => (
  <AppBar>
    <Toolbar>
      <Button>Home</Button>
      <Button>Rating</Button>
      <Button>Store</Button>
    </Toolbar>
  </AppBar>
);

export default Navbar;
