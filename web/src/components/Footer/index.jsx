import React from "react";
import {GitHub} from "@material-ui/icons";
import {Link} from "@material-ui/core";
import * as Styled from "./styled";

const Footer = () => {
    return (
        <Styled.footerWrapper>
            <Styled.wave />
            <Styled.iconsWrapper>
                <Link href="https://github.com/anna2506/MainSteam" color="inherit">
                   <Styled.iconWrapper>
                        <GitHub style={{ fontSize: 36 }}/>
                    </Styled.iconWrapper>
                </Link>
            </Styled.iconsWrapper>
        </Styled.footerWrapper>
    )
};

export default Footer;
