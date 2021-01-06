import styled from 'styled-components';

export const Content = styled.div`
    min-height: 100%;
    display: flex;
    flex-direction: column;
    background: #0201C7;
    background-image: linear-gradient(#8383E3 1px, transparent 1px),
    linear-gradient(90deg, #8383E3 1px, transparent 1px);
    background-size: 90px 90px,
    90px 90px;
    
`;

export const MainContent = styled.div`
    flex: 1 0 auto;
    position: relative;  
    margin-top: 2em;
`;

export const Container = styled.div`
    margin: 0 auto;
    width: 90%;
    max-width: 900px;
    display: flex;
    flex-direction: column;
`;

export const Main = styled.main`
    display: flex;
    justify-content: space-between;
`;

export const Aside = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const ProfileMainContent = styled.div`
    display: flex;
    width: 75%;
    padding-bottom: 2em;
    margin-bottom: 2em;
    justify-content: space-between;
`;

export const ProfileExtraContent = styled.div`
    text-align: right:
    width: 15%;
`;

export const ProfileExtraInfo = styled.div`
    text-align: right;
`;

export const ImageDiv = styled.div`
    width: 25%;
    position: relative;
    transition: all 500ms ease;
    &:hover > #uploadImage {
      display: block;
    }
    &:hover > #labelImage {
      display: inline-block;
    }
`;

export const OverlayDiv = styled.div`
    margin: 0;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    overflow: hidden;
    opacity: 0;
    transition: .5s ease;
    background-color: #fff;
    &:hover, :focus {
        opacity: .5;
        cursor: pointer;
    }
`;

export const ProfileImage = styled.img`
    width: 100%;
    min-height: 130px;
    display: block;
    border: .2em solid #fff;
    object-fit: cover;
`;

export const ProfileDescription = styled.div`
    width: 65%;
    display: flex;
    flex-direction: column;
`;

export const PersonalInfoDiv = styled.div`
    width: 55%;
    display: flex;
`;

export const Nickname = styled.p`
    font-size: 1.4rem;
    color: #fff;
    margin-bottom: .2em;
`;

export const InputNickname = styled.input`
    display: block;
    font-family: inherit;
    font-size: 1.4rem;
    background: none;
    color: white;
    border: 0;
    border-bottom: .1em solid #8383E3;
    margin-bottom: .2em;
    transition: all 500ms ease-in-out;
    outline: none;
    &:hover, :focus {
      border-bottom: .1em solid #f2f2fc;
    }
`;

export const InputImage = styled.input`
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    display: none;
    z-index: -1;
    & + #labelImage {
      text-align: center;
      margin: 0;
      transform: translate(-50%, -50%);
      position: absolute; 
      top: 50%; 
      left: 50%;
      color: white;
      background-color: transparent;
      display: none;
      cursor: pointer;
    }
`;

export const LabelInputImage = styled.label`
    #overlay {
      opacity: .5;
      cursor: pointer;
    }
`;

export const Figure = styled.img`
      filter: invert(100%) sepia(97%) saturate(0%) hue-rotate(355deg) brightness(103%) contrast(103%);
      margin: 0 auto;
      width: 60%;
      height: 60%;
`;

export const Flag = styled.img`
    width: 10%;
    align-self: center;
    margin: 0 .5em;
`;

export const Description = styled.p`
    width: 55%;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #fff;
    font-size: .8em;
`;

export const Greeting = styled.p`
`;

export const Rank = styled.span`
    text-transform: uppercase;
    font-weight: bold;
    color: #FFCD48;
    
`;

export const SaveBtn = styled.button`
    background: white;
    float: right;
    padding: .3em;
    margin: .7em 0;
    border: 0;
    color: #0201C7;
    transition: all 500ms ease;
    &:hover, focus {
        background: rgba(131,131,227,1);
        color: white;
        box-shadow: inset 0 0 0 3px #8383E7;
        cursor: pointer;
    }
`;

export const Level = styled.p`
    font-size: 1.4rem;
    text-align: right;
    margin-right: 0;
    color: #fff;
    text-transform: uppercase;
`;

export const EditProfile = styled.button`
    background: white;
    padding: .3em;
    margin: .7em 0;
    border: 0;
    color: #0201C7;
    transition: all 500ms ease;
    &:hover, focus {
        background: rgba(131,131,227,1);
        color: white;
        box-shadow: inset 0 0 0 3px #8383E7;
        cursor: pointer;
    }
`;

export const Status = styled.p`
    font-size: 1.2rem;
    margin-bottom: 1.2em;
    color: #fff;
    text-transform: uppercase;
`;

export const Info = styled.p`
    padding-bottom: 1em;
    color: #fff;
    text-transform: uppercase;
`;

export const Option = styled.option`
    color: #000;
    width: 35%;
`;
