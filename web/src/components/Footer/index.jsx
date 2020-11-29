import React from 'react';
import * as Styled from './styled';
import Github from '../../assets/github.svg';
import Figma from '../../assets/figma.svg';

const Footer = () => (
  <Styled.Footer>
    {/* <Styled.Wave /> */}
    <Styled.IconsContainer>
      <Styled.Link href="https://github.com/anna2506/MainSteam">
        <Styled.Icon src={Github} />
      </Styled.Link>
      <Styled.Link href="https://www.figma.com/file/e52de0n719MUHHIlVaJZMy/WebITMO?node-id=41%3A0">
        <Styled.Icon src={Figma} />
      </Styled.Link>
    </Styled.IconsContainer>
  </Styled.Footer>
);

export default Footer;
