import styled from "@emotion/styled";
import { device } from "styles/mediaquery";

export const ControlBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: ${p => p.theme.spacing(4)};
  padding: ${p => p.theme.spacing(2)};

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
  ${device.tabletM} {
    align-items: center;
  }
`

export const OptionBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  
  justify-content: center;
  ${device.mobileOnly} {
    width: 100%;
  }
  ${device.tabletOnly} {
    width: 100%;
  }
`

export const SortBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: ${p => p.theme.spacing(3)};
  padding: ${p => p.theme.spacing(2)} 0;
`

export const BreadcrumbsBox = styled.div`
  display: flex;
  align-items: center;
  padding: ${p => p.theme.spacing(4)} 0;
  column-gap: ${p => p.theme.spacing(2)};
  color: ${p => p.theme.colors.textLinkColor};

  ${device.tabletM} {
    padding: ${p => p.theme.spacing(4)};
  }
`