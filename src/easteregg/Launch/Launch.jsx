import { Button } from 'components';
import { LaunchBox, StartText } from './Launch.styled';

export const Launch = () => {
  const playPresentation = () => {
    console.log('3 2 1 Start');
  };

  return (
    <LaunchBox>
      <StartText>
        <Button onClick={playPresentation}>
          {`>>`} Rocket launch {`<<`}
        </Button>
      </StartText>
    </LaunchBox>
  );
};
