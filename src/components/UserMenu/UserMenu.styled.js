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

export const UserBar = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 2000;

  display: flex;
  flex-direction: column;
  align-items: center;
  width: 320px;
  height: 100%;
  padding: ${p => p.theme.spacing(7)} ${p => p.theme.spacing(5)};

  background: linear-gradient(to right, rgb(90, 63, 55), rgb(44, 119, 68));
  box-shadow: -3px -3px 10px black;
`

export const UserName = styled.p`
  margin-top: ${p => p.theme.spacing(5)};
  margin-bottom: auto;
  width: 300px;

  font-size: ${p => p.theme.fontSizes.large};
  text-align: center;
  overflow-wrap: break-word;
  color: ${p => p.theme.colors.textMain};
`

export const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  outline: 3px solid white;
`

export const AvatarBig = styled.img`
  position: relative;
  width: 180px;
  height: 180px;
  border-radius: 10px;
  cursor: pointer;
  border: 3px solid white;
  transition: transform ${p => p.theme.animation.cubicBezierAverageSpeed};

  :hover {
    transform: scale(1.05);
  }
`