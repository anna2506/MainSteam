import React, {PureComponent} from "react";
import * as components from "@material-ui/core";

const SignUp = () => {
    return (
        <components.Container component="main" maxWidth="xs">
            <form>
                <components.Grid container spacing={2}>
                    <components.Grid item xs={12} sm={6}>
                        <components.TextField
                            autoComplete="fname"
                            name="firstName"
                            variant="outlined"
                            required
                            fullWidth
                            id="firstName"
                            label="First Name"
                            autoFocus
                        />
                    </components.Grid>
                    <components.Grid item xs={12} sm={6}>
                        <components.TextField
                            variant="outlined"
                            required
                            fullWidth
                            id="lastName"
                            label="Last Name"
                            name="lastName"
                            autoComplete="lname"
                        />
                    </components.Grid>
                    <components.Grid item xs={12}>
                        <components.TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                    </components.Grid>
                    <components.Grid item xs={12}>
                        <components.TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="nickname"
                            label="Nickname"
                            name="nickname"
                        />
                    </components.Grid>
                    <components.Grid item xs={12}>
                        <components.TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                    </components.Grid>
                </components.Grid>
                <components.Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary">
                    Sign Up
                </components.Button>
            </form>
        </components.Container>
    )
};

export default SignUp;
