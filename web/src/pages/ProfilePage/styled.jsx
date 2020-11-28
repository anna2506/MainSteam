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
    
`

export const MainContent = styled.div`
    flex: 1 0 auto;
    position: relative;  
    margin-top: 2em;
`

export const Container = styled.div`
    margin: 0 auto;
    width: 90%;
    max-width: 900px;
    display: flex;
    flex-direction: column;
`

export const Main = styled.main`
    display: flex;
    justify-content: space-between;
`

export const Aside = styled.div`
    display: flex;
    justify-content: space-between;
`

export const ProfileMainContent = styled.div`
    display: flex;
    width: 75%;
    padding-bottom: 2em;
    margin-bottom: 2em;
    justify-content: space-between;
`

export const ProfileExtraContent = styled.div`
    text-align: right:
    width: 15%;
`

export const ProfileExtraInfo = styled.div`
    text-align: right;
`

export const ProfileImage = styled.img`
    width: 25%;
    border-radius: 50%;
    border: 3px solid #FFCD48;
`

export const ProfileDescription = styled.div`
    width: 65%;
    display: flex;
    flex-direction: column;
`

export const Nickname = styled.p`
    font-size: 1.4rem;
`

export const Description = styled.p`
    width: 55%;
    border-bottom: 1px solid #FFCD48;
    overflow: hidden;
    text-overflow: ellipsis;
`

export const Level = styled.p`
    font-size: 1.4rem;
    text-align: right;
    margin-right: 0;
`

export const EditProfile = styled.button`
    background: transparent;
    border: 0;
    &:hover, focus {
        color: #FFCD48;
        cursor: pointer;
    }
`

export const Status = styled.p`
    font-size: 1.2rem;
    margin-bottom: 1.2em;
`

export const Info = styled.p`
    padding-bottom: 1em;
`
