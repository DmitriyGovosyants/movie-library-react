import { MdLibraryAddCheck, MdLibraryAdd } from 'react-icons/md';
import { Button } from 'components';
import { ButtonList, ButtonItem } from './MovieCardControl.styled';

export const MovieCardControl = ({
  queueStatus,
  watchedStatus,
  controlLibrary,
  controlTrailer,
  trailersInfo,
}) => {
  return (
    <ButtonList>
      <ButtonItem>
        <Button
          size={'small'}
          isCheck={queueStatus}
          onClick={() => controlLibrary('queue')}
        >
          queue
          {queueStatus ? (
            <MdLibraryAddCheck size={35} style={{ marginLeft: 10 }} />
          ) : (
            <MdLibraryAdd size={35} style={{ marginLeft: '10px' }} />
          )}
        </Button>
      </ButtonItem>
      <ButtonItem>
        <Button
          size={'small'}
          isCheck={watchedStatus}
          onClick={() => controlLibrary('watched')}
        >
          watched
          {watchedStatus ? (
            <MdLibraryAddCheck size={35} style={{ marginLeft: 10 }} />
          ) : (
            <MdLibraryAdd size={35} style={{ marginLeft: '10px' }} />
          )}
        </Button>
      </ButtonItem>
      <ButtonItem>
        <Button onClick={controlTrailer}>
          {trailersInfo?.length === 0 ? '>> trailer <<' : '>> info <<'}
        </Button>
      </ButtonItem>
    </ButtonList>
  );
};
