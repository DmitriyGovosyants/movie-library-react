import styled from "@emotion/styled";
import { device } from "styles/mediaquery";

export const UserMenuBox = styled.div`
  display: flex;
  align-items: center;
  margin-left: ${p => p.theme.spacing(3)};
  
  ${device.mobileM} {
    margin-left: ${p => p.theme.spacing(3)};
  }
`

export const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  outline: 3px solid white;
`

export const UserBar = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 20;
  overflow-y: scroll;
  overflow-x: hidden;

  display: flex;
  flex-direction: column;
  align-items: center;
  width: 320px;
  height: 100%;
  padding: ${p => p.theme.spacing(7)} ${p => p.theme.spacing(10)};

  background: linear-gradient(to right, rgb(90, 63, 55), rgb(44, 119, 68));
  box-shadow: -3px -3px 10px black;

  ${device.tabletM} {
    width: 500px;
  }
`

export const AvatarBig = styled.img`
  position: relative;
  width: 180px;
  height: 180px;
  margin-bottom: ${p => p.theme.spacing(5)};

  border-radius: 10px;
  cursor: pointer;
  border: 3px solid white;
  transition: transform ${p => p.theme.animation.cubicBezierAverageSpeed};

  :hover {
    transform: scale(1.05);
  }
`

export const UserName = styled.p`
  width: 300px;
  margin-bottom: ${p => p.theme.spacing(5)};

  font-size: ${p => p.theme.fontSizes.large};
  text-align: center;
  overflow-wrap: break-word;
  color: ${p => p.theme.colors.textMain};
  text-shadow: 2px 2px 3px darkred;
`

export const UserContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: auto;
  padding: ${p => p.theme.spacing(2)};
  row-gap: 10px;

  background-color: ${p => p.theme.colors.bgThird};
  border-radius: 10px;
`

export const Title = styled.h3`
  text-align: center;
  margin-bottom: ${p => p.theme.spacing(3)};
  padding: ${p => p.theme.spacing(2)};

  font-size: ${p => p.theme.fontSizes.large};
  letter-spacing: 0.06em;
  color: ${p => p.theme.colors.textThird};
  /* background-color: ${p => p.theme.colors.checkColor}; */
  border-bottom: 2px solid #382661;
  /* border-radius: 10px; */
`

export const Link = styled.a`
  padding: ${p => p.theme.spacing(2)} 0;
  font-size: ${p => p.theme.fontSizes.medium};
  font-weight: 500;
  color: ${p => p.theme.colors.textFourth};

  transition: color ${p => p.theme.animation.cubicBezierAverageSpeed};

  :hover {
    color: ${p => p.theme.colors.textLinkColor};
  }
`