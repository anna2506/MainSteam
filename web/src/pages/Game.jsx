import React from 'react';
import styled from 'styled-components';
import Layout from './Layout';
import SnakeGameSvg from '../assets/snake-game.png';
import Button from '../components/Button';
import * as Styled from "../components/Navbar/styled";

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  max-width: 800px;
  margin: auto;
  justify-content: space-around;
  flex: 1;
  padding: 20px 0 0;
  img { padding: 10px; }
  button:hover { background-color: #0201c7; }
`;

const Description = styled.p`
  font-weight: bold;
  font-size: 18pt;
  text-align: center;
  margin: 20px;
`;

const Store = () => (
  <Layout color="#8383e3" bg="linear-gradient(180deg, #5156B0 22.92%, #8383E3 100%)" linkColor="#FFCD48">
    <Content>
      <img src={SnakeGameSvg} alt=" " />
      <Button name="Play" />
    </Content>
    <Description>
      {'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut hendrerit mi euismod enim aliquam, ac eleifend nisi tincidunt. Etiam aliquam, sapien at cursus eleifend, metus mauris sagittis turpis, venenatis viverra odio sem sit amet ex. Suspendisse vitae velit accumsan, semper sapien eget, interdum turpis. Etiam faucibus elit sapien, id egestas libero mattis non. Vestibulum eu dapibus urna. Quisque volutpat lorem in augue vehicula aliquet. Aenean hendrerit tortor ligula, congue fringilla odio sodales at. Nullam luctus enim ut dignissim convallis. Nullam quis metus nec lorem cursus mollis ac eu lorem. Integer cursus erat eros, ac aliquet ante iaculis sed. Pellentesque porttitor vulputate diam vitae dapibus. Sed ac tellus eget arcu maximus mollis. Quisque id ultrices leo.\n'
      + 'Vivamus fringilla orci mauris, sed fermentum urna pellentesque ut. Vivamus commodo mi nec neque aliquam, sed gravida dui feugiat. Nulla et metus id felis ultrices varius. Nullam non ante in sapien finibus interdum. Quisque tincidunt enim ac massa suscipit, sed lacinia enim tincidunt. Nunc tristique maximus elit eget blandit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi laoreet gravida purus sit amet ultricies. Donec in nibh id orci mollis tincidunt.\n'
      + 'Fusce nec purus erat. Curabitur eu erat ante. Nullam mollis consequat velit, condimentum fringilla nibh placerat at. Aliquam hendrerit vehicula ultrices. Donec gravida nibh leo, tempus finibus mi efficitur at. Vestibulum quam nisl, mattis vel convallis nec, iaculis quis diam. Cras sed ipsum magna. Ut mattis orci id laoreet feugiat. Vestibulum luctus ante nec ante interdum lacinia. Aliquam auctor sit amet dui eget volutpat. Suspendisse non lorem feugiat, fringilla ex quis, convallis tortor. Maecenas eu nisi condimentum mauris maximus condimentum. In hendrerit malesuada nisl luctus iaculis.\n'
      + 'Maecenas semper porta gravida. Phasellus mauris nulla, tempor at nulla a, porta iaculis augue. In erat turpis, tincidunt nec turpis sit amet, feugiat porta lectus. Morbi mattis euismod interdum. Nullam egestas nisi nulla, at molestie tortor ullamcorper eget. Donec suscipit ante sed elit porta sagittis. Vivamus posuere dignissim ligula non consectetur. Etiam sagittis lobortis facilisis. Quisque vitae ipsum elit. Aliquam ut nisi nec purus vestibulum mattis.\n'
      + 'Cras cursus finibus tellus, ut tristique sapien ultrices non. Proin vitae porttitor est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat. Vestibulum placerat hendrerit sollicitudin. Aliquam laoreet, quam quis feugiat mollis, ex ligula posuere tortor, pellentesque ornare leo ipsum vitae nisl. Cras bibendum elit eget dictum vulputate. Mauris eget lacus turpis. Praesent odio sem, porta id luctus nec, mollis non justo. Suspendisse potenti.\n'}
    </Description>
  </Layout>
);

export default Store;
