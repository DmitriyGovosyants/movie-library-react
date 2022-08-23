import { Triangle } from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { LoaderOverlay } from './Spinner.styled';

export const Spinner = () => {
  return (
    <LoaderOverlay>
      <Triangle color="#00BFF0" height={80} width={80} textAlign="center" />
    </LoaderOverlay>
  );
};
