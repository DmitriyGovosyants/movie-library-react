import { Triangle } from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { LoaderContainer } from './Spinner.styled';

export const Spinner = () => {
  return (
    <LoaderContainer>
      <Triangle color="#00BFF0" height={80} width={80} textAlign="center" />
    </LoaderContainer>
  );
};
