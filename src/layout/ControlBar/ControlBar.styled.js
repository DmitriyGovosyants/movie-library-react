import styled from "@emotion/styled";
import { device } from "styles/mediaquery";

export const ControlBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: ${p => p.theme.spacing(4)};
  padding: ${p => p.theme.spacing(1)} ${p => p.theme.spacing(2)};

  font-size: ${p => p.theme.fontSizes.medium};
  font-weight: 500;
  text-transform: uppercase;
  color: ${p => p.theme.colors.textSecond};
  box-shadow: inset 1px 1px 20px ${p => p.theme.colors.bgSecond},
   inset -1px -1px 20px ${p => p.theme.colors.bgSecond},
   inset 1px -1px 20px ${p => p.theme.colors.bgSecond},
   inset -1px 1px 20px ${p => p.theme.colors.bgSecond};

  ${device.mobileOnly} {
    flex-direction: column;
  }
  ${device.desktopL} {
    flex-direction: row;
  }
`

export const OptionBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: column;

  ${device.tabletM} {
    flex-direction: row;
    justify-content: space-between;
  }

  ${device.tabletM} {
    flex-direction: row;
  }
  ${device.notBigDesktop} {
    width: 100%;
  }
`

export const SortBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: ${p => p.theme.spacing(3)};
  padding: ${p => p.theme.spacing(2)} 0;
`

export const InfoBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${p => p.theme.spacing(4)};
`

export const BreadcrumbsBox = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  column-gap: ${p => p.theme.spacing(2)};

  text-transform: uppercase;
  color: ${p => p.theme.colors.textLinkColor};

  ${device.tabletM} {
    padding: 0 ${p => p.theme.spacing(4)};
  }
`