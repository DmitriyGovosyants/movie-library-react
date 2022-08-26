import { Button } from 'components';
import { PresentationBox, StartText } from './Presentation.styled';

export const Presentation = () => {
  const playPresentation = () => {
    console.log("Let's go with sound!");
  };

  return (
    <PresentationBox>
      <StartText>
        <Button onClick={playPresentation}>
          {`>>`} Let's go with sound {`<<`}
        </Button>
      </StartText>
    </PresentationBox>
  );
};
