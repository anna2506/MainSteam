import React, { useState } from 'react';
import {
  AppBar, Toolbar, Button,
} from '@material-ui/core';
import RegisterModal from '../RegisterModal';

function Navbar() {
  const [registerOpen, setRegisterOpen] = useState(true);
  return (
    <AppBar>
      <RegisterModal isOpen={registerOpen} onClose={() => setRegisterOpen(false)} />
      <Toolbar>
        <Button>Home</Button>
        <Button>Rating</Button>
        <Button>Store</Button>
        <button onClick={() => setRegisterOpen(true)} type="button">
          Open RegisterModal
        </button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
