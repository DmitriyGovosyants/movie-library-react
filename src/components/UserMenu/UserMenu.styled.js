import styled from "@emotion/styled";
import { device } from "styles/mediaquery";

export const UserMenuBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  margin-left: auto;
  
  ${device.tabletM} {
    margin-left: ${p => p.theme.spacing(5)};
  }
`

export const UserBar = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  width: 320px;
  height: 100vh;
  padding: ${p => p.theme.spacing(7)} ${p => p.theme.spacing(5)};

  background: linear-gradient(to right, rgb(90, 63, 55), rgb(44, 119, 68));
  box-shadow: -3px -3px 10px white;
`

export const UserName = styled.p`
  /* display: block; */
  margin-top: ${p => p.theme.spacing(5)};
  margin-bottom: auto;
  width: 300px;
  /* word-wrap: break-all; */
  overflow-wrap: break-word;

  font-size: ${p => p.theme.fontSizes.large};
  text-align: center;
  color: ${p => p.theme.colors.textMain};
`

export const Avatar = styled.img`
  width: ${p => p.big ? '150px' : '50px'};
  width: ${p => p.big ? '150px' : '50px'};
  border-radius: 50%;
  cursor: pointer;
`