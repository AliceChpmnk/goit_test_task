import styled from 'styled-components';	
import { ReactComponent as logo } from '../../images/logo.svg';

export const UserCardsList = styled.ul`
display: flex;
gap: 30px;
flex-wrap: wrap;
padding: 0;
justify-content: center;
`
export const UserCard = styled.li`
box-sizing: border-box;
list-style-type: none;
position: relative;
display: flex;
flex-direction: column;
align-items: center;
width: 380px;
height: 460px;
padding-top: 178px;
padding-bottom: 36px;
background: linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%);
box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
border-radius: 20px;

p {
    font-family: 'Montserrat';
    margin: 0;
    font-weight: 500;
    font-size: 20px;
    line-height: 1.2;
    text-transform: uppercase;
    color: #EBD8FF;
}

p:first-of-type {
    padding-bottom: 16px;
}

p:last-of-type {
    padding-bottom: 26px;
}

  &::before {
    content: '';
    position: absolute;
    top: 214px;
    width: 100%;
    height: 8px;
    background: #EBD8FF;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06), inset 0px -1.71846px 3.43693px #AE7BE3, inset 0px 3.43693px 2.5777px #FBF8FF;
  }
`
export const Logo = styled(logo)`
position: absolute;
top: 20px;
left: 20px;
  width: 76px;
  height: 22px;
  fill: rgba(255, 255, 255, 0.3);
`;

export const UserAvatar = styled.div`
    margin-bottom: 26px;
    background: #EBD8FF;
    box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06), inset 0px -2.19582px 4.39163px #AE7BE3, inset 0px 4.39163px 3.29372px #FBF8FF;
    border-radius: 50%;
    width: 80px;
    height: 80px;
    position: relative;

  img {
    display: block;
    width: 62px;
    height: 62px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    box-shadow: 0px -2.19582px 4.39163px #AE7BE3;
  }
  `

export const BackgroundImg = styled.img`
    position: absolute;
    top: 28px;
    left: 36px;
    width: 308px;
`

export const FollowBtn = styled.button`
font-family: 'Montserrat';
font-weight: 600;
font-size: 18px;
line-height: 1.2;
color: #373737;
padding: 14px 39px;
background: ${props => props.type === 'following' ? '#5CD3A8' : '#EBD8FF'};
box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
border-radius: 10.3108px;
border: none;
cursor: pointer;
  &:hover {
    background: ${props => props.type === 'following' ? '#7EE1BF' : '#FBD382'};
  }
`