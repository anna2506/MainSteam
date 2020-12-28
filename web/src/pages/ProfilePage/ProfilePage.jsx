import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Select from '@material-ui/core/Select';
import * as playerActions from '../../store/player/actions';
import * as playerSelectors from '../../store/player/selector';
import * as Styled from './styled';
import Library from '../../components/Library';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ProfileImage from '../../assets/ProfileImage.png';

const ProfilePage = () => {
  const dispatch = useDispatch();
  const [isEditable, setIsEditable] = useState(false);
  const [description, setDescription] = useState('Something...');
  const [newCountry, setNewCountry] = useState('');
  const player = useSelector((state) => playerSelectors.getPlayerInfo(state));
  const countries = useSelector((state) => playerSelectors.getCountries(state));
  const countryData = countries.find((curCountry) => curCountry.name === player.country);

  useEffect(() => {
    dispatch(playerActions.getPlayer());
    dispatch(playerActions.getCountries());
  }, []);

  const editDescription = (event) => {
    setDescription(event.target.value);
  };

  const chooseCountry = (event) => {
    setNewCountry(event.target.value);
  };

  const updateProfile = () => {
    dispatch(playerActions.updatePlayer({
      country: newCountry,
      experience: 100,
      login: player.login,
      email: player.email,
    }));
  };

  const components = Object.values(countries).map(
    (countryName) => (
      <Styled.Option key={countryName.alpha2Code}>
        {countryName.name}
      </Styled.Option>
    ),
  );

  return (
    <Styled.Content>
      <Navbar bg="linear-gradient(180deg, #623AFB 0%, #0201C7 100%);" linkColor="#FFCD48" />
      <Styled.MainContent>
        <Styled.Container>
          <Styled.Main>
            <Styled.ProfileMainContent>
              <Styled.ImageDiv>
                <Styled.ProfileImage src={ProfileImage} />
                <Styled.OverlayDiv> </Styled.OverlayDiv>
              </Styled.ImageDiv>
              <Styled.ProfileDescription>
                <Styled.PersonalInfoDiv>
                  <Styled.Nickname>{player.login}</Styled.Nickname>
                  {countryData && <Styled.Flag src={countryData.flag} />}
                </Styled.PersonalInfoDiv>
                {isEditable
                  ? (
                    <Styled.EditableArea maxlength="50" onChange={editDescription}>
                      {description}
                    </Styled.EditableArea>
                  )
                  : (
                    <Styled.Description contenteditable={isEditable}>
                      {description}
                    </Styled.Description>
                  )}
              </Styled.ProfileDescription>
            </Styled.ProfileMainContent>
            <Styled.ProfileExtraContent>
              <Styled.Level>LEVEL 9</Styled.Level>
              {isEditable ? (
                <Styled.SaveBtn onClick={() => {
                  setIsEditable(false);
                  updateProfile();
                }}
                >
                  Save
                </Styled.SaveBtn>
              )
                : (
                  <Styled.EditProfile onClick={() => (setIsEditable(true))}>
                    Edit profile
                  </Styled.EditProfile>
                )}
            </Styled.ProfileExtraContent>
          </Styled.Main>
          <Styled.Aside>
            <Library />
            <Styled.ProfileExtraInfo>
              <Styled.Status>
                ONLINE
              </Styled.Status>
              {isEditable
                ? (
                  <Select
                    native
                    value={newCountry}
                    onChange={chooseCountry}
                    style={
                      {
                        width: '60%',
                        marginBottom: '1em',
                        color: '#fff',
                        borderColor: '#fff',
                      }
                    }
                  >
                    {components}
                  </Select>
                )
                : (
                  <Styled.Info>{player.country}</Styled.Info>
                )}
              <Styled.Info>ACHIEVEMENTS</Styled.Info>
            </Styled.ProfileExtraInfo>
          </Styled.Aside>
        </Styled.Container>
      </Styled.MainContent>
      <Footer />
    </Styled.Content>
  );
};

export default ProfilePage;
