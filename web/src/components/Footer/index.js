import React from "react";
import {GitHub} from "@material-ui/icons";
import {Link} from "@material-ui/core";

const Footer = () => {
    return (
        <div className="footer">
            <Link href="https://github.com/anna2506/MainSteam">
                <GitHub />
            </Link>
        </div>
    )
};

export default Footer;
