import React from 'react';
import * as Styled from './styled';
import Library from '../../components/Library';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ProfileImage from '../../assets/ProfileImage.png';

const ProfilePage = () => {
    return (
        <Styled.Content>
            <Navbar style={{background: "linear-gradient(180deg, #623AFB 0%, #0201C7 100%), #8383E3"}}/>
            <Styled.MainContent>
                <Styled.Container>
                    <Styled.Main>
                        <Styled.ProfileMainContent>
                            <Styled.ProfileImage src={ProfileImage}/>
                            <Styled.ProfileDescription>
                                <Styled.Nickname>Nickname</Styled.Nickname>
                                <Styled.Description>Something...</Styled.Description>
                            </Styled.ProfileDescription>
                        </Styled.ProfileMainContent>
                        <Styled.ProfileExtraContent>
                            <Styled.Level>LEVEL 9</Styled.Level>
                            <Styled.EditProfile>Edit profile</Styled.EditProfile>
                        </Styled.ProfileExtraContent>
                    </Styled.Main>
                    <Styled.Aside>
                        <Library />
                        <Styled.ProfileExtraInfo>
                            <Styled.Status>ONLINE</Styled.Status>
                            <Styled.Info>GERMANY</Styled.Info>
                            <Styled.Info>GAMES</Styled.Info>
                            <Styled.Info>ACHIEVEMENTS</Styled.Info>
                        </Styled.ProfileExtraInfo>
                    </Styled.Aside>
                </Styled.Container>
            </Styled.MainContent>
            <Footer />
        </Styled.Content>
    )
};

export default ProfilePage;
