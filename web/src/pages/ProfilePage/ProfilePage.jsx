import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Select from '@material-ui/core/Select';
import axios from 'axios';
import * as playerActions from '../../store/player/actions';
import * as playerSelectors from '../../store/player/selector';
import * as Styled from './styled';
import calculateLevel from '../../helpers/calculateLevel';
import Library from '../../components/Library';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Upload from '../../assets/upload.svg';

const ProfilePage = () => {
  const dispatch = useDispatch();
  const [isEditable, setIsEditable] = useState(false);
  const [newNickname, setNewNickname] = useState('');
  const [newCountry, setNewCountry] = useState('');
  const player = useSelector((state) => playerSelectors.getPlayerInfo(state));
  const playerId = useSelector((state) => playerSelectors.getPlayerId(state));
  const countries = useSelector((state) => playerSelectors.getCountries(state));
  const countryData = countries.find((curCountry) => curCountry.name === player.country);

  useEffect(() => {
    dispatch(playerActions.getPlayer());
    dispatch(playerActions.getCountries());
  }, []);

  const chooseCountry = (event) => {
    if (event.target.value) {
      setNewCountry(event.target.value);
    } else setNewCountry(player.country);
  };

  const changeNickname = (event) => {
    setNewNickname(event.target.value);
  };

  const updateProfile = () => {
    dispatch(playerActions.updatePlayer({
      country: newCountry,
      experience: player.experience,
      login: newNickname,
      email: player.email,
    }));
  };

  const uploadImage = (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    axios.post(`${axios.defaults.baseURL}/player/avatar`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    window.location.reload();
  };

  const components = Object.values(countries).map(
    (countryName) => (
      <Styled.Option key={countryName.alpha2Code}>
        {countryName.name}
      </Styled.Option>
    ),
  );

  const setRank = () => {
    if (player.experience > 30000) {
      return (
        <Styled.Greeting>
          fear the son of
          <Styled.Rank> god</Styled.Rank>
        </Styled.Greeting>
      );
    } if (player.experience < 5000) {
      return (
        <Styled.Greeting>
          take care of
          <Styled.Rank> rookie</Styled.Rank>
        </Styled.Greeting>
      );
    } if (player.experience < 15000) {
      return (
        <Styled.Greeting>
          meet the rising
          <Styled.Rank> legend</Styled.Rank>
        </Styled.Greeting>
      );
    }
    return (
      <Styled.Greeting>
        <Styled.Rank> Kojima</Styled.Rank>
        of his time
      </Styled.Greeting>
    );
  };

  return (
    <Styled.Content>
      <Navbar bg="linear-gradient(180deg, #623AFB 0%, #0201C7 100%);" linkColor="#FFCD48" />
      <Styled.MainContent>
        <Styled.Container>
          <Styled.Main>
            <Styled.ProfileMainContent>
              <Styled.ImageDiv>
                <Styled.ProfileImage src={`${axios.defaults.baseURL}/player/avatar/${playerId + 1}`} />
                <Styled.InputImage type="file" id="uploadImage" name="uploadImage" accept="image/*" onChange={uploadImage} />
                <Styled.LabelInputImage for="uploadImage" id="labelImage">
                  <Styled.Figure src={Upload} />
                </Styled.LabelInputImage>
              </Styled.ImageDiv>
              <Styled.ProfileDescription>
                <Styled.PersonalInfoDiv>
                  {isEditable ? (<Styled.InputNickname type="text" name="nickname" value={newNickname} onChange={changeNickname} />)
                    : (<Styled.Nickname>{player.login}</Styled.Nickname>)}
                  {countryData && !isEditable && <Styled.Flag src={countryData.flag} />}
                </Styled.PersonalInfoDiv>
                <Styled.Description>
                  {setRank()}
                </Styled.Description>
              </Styled.ProfileDescription>
            </Styled.ProfileMainContent>
            <Styled.ProfileExtraContent>
              <Styled.Level>
                LEVEL
                {calculateLevel(player.experience)}
              </Styled.Level>
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
                  <Styled.EditProfile onClick={() => {
                    setIsEditable(true);
                    setNewNickname(player.login);
                  }}
                  >
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
            </Styled.ProfileExtraInfo>
          </Styled.Aside>
        </Styled.Container>
      </Styled.MainContent>
      <Footer />
    </Styled.Content>
  );
};

export default ProfilePage;
