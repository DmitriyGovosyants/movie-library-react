import { Section, Container } from 'layout';
import {
  FooterBox,
  FlexContainer,
  FooterText,
  FooterLink,
} from './Footer.styled';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const yearsSiteExistence =
    currentYear === 2022 ? currentYear : `2022-${currentYear}`;

  return (
    <FooterBox>
      <Section>
        <Container>
          <FlexContainer>
            <FooterText>
              &copy; {yearsSiteExistence} Movie Library React. All Rights
              Reserved.
            </FooterText>
            <FooterLink
              href="https://www.linkedin.com/in/dmitriy-govosyants-53b8a4156/"
              rel={'noopener noreferrer'}
              target={'_blank'}
              aria-label="Developer Linkedin Contact"
            >
              Developed by Dmitro Govosyants
            </FooterLink>
          </FlexContainer>
        </Container>
      </Section>
    </FooterBox>
  );
};
