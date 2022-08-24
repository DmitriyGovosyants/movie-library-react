import styled from "@emotion/styled";
import { device } from "styles/mediaquery";

export const RatingList = styled.ul`
  display: flex;
  justify-content: center;
  margin-bottom: ${p => p.theme.spacing(3)};
  padding: 10px 0;

  border-top: 1px solid black;
  border-bottom: 1px solid black;
`

export const RatingItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;

  :not(:last-child) {
    margin-right: 10px;
  }

  ${device.mobileM} {
    min-width: 100px;
  }
`

export const RatingValue = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 50px;
  padding: ${p => p.theme.spacing(2)};

  font-size: ${p => p.theme.fontSizes.medium};
  font-weight: 700;
  text-align: center;
`