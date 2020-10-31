import React from "react";
import {AppBar, Toolbar, Button, Link} from "@material-ui/core";

const Navbar = () => {
    return (
        <AppBar>
            <Toolbar>
                <Button>Home</Button>
                <Button>Rating</Button>
                <Button>Store</Button>
            </Toolbar>
        </AppBar>
    )
};

export default Navbar;
