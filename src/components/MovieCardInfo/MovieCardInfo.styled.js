import styled from "@emotion/styled";

export const InfoList = styled.ul`
  margin-bottom: ${p => p.theme.spacing(6)};
`

export const InfoItem = styled.li`
  display: flex;
  align-items: center;

  :not(:last-child) {
    margin-bottom: ${p => p.theme.spacing(2)};
  }
`

export const InfoLabel = styled.p`
  min-width: 100px;
`

export const InfoValue = styled.p`
  margin-left: ${p => p.theme.spacing(2)};
  font-size: ${p => p.theme.fontSizes.medium};
  font-weight: 500;
`

export const AboutLabel = styled.p`
  margin-bottom: ${p => p.theme.spacing(2)};
  font-size: ${p => p.theme.fontSizes.medium};
  font-weight: 500;
`

export const AboutText = styled.p`
  font-size: ${p => p.theme.fontSizes.small};
  line-height: 1.5;
`