import React, {PureComponent} from "react";
import * as components from "@material-ui/core";

const SignIn = () => {
        return (
            <components.Container component="main" maxWidth="xs">
                <form>
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
                    <components.Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary">
                        Sign In
                    </components.Button>
                </form>
            </components.Container>
        )
}

export default SignIn;
