import styled from "@emotion/styled";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
`

export const FormTitle = styled.h2`
  margin-bottom: ${p => p.theme.spacing(5)};

  font-size: 30px;
  letter-spacing: 0.05em;
  text-align: center;
  color: ${p => p.theme.colors.accentColor};
`

export const FormInput = styled.input`
  min-height: 40px;

  :not(:last-child) {
    margin-bottom: ${p => p.theme.spacing(5)}
  }
`