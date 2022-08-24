import { MdLibraryAddCheck, MdLibraryAdd } from 'react-icons/md';
import { Button } from 'components';
import { ButtonList, ButtonItem } from './MovieCardControl.styled';
import { ViewStatus } from 'constants/constants';

export const MovieCardControl = ({
  queueStatus,
  watchedStatus,
  controlLibrary,
  controlTrailer,
  movieTrailers,
}) => {
  return (
    <ButtonList>
      <ButtonItem>
        <Button
          size={'small'}
          isCheck={queueStatus}
          onClick={() => controlLibrary(ViewStatus.QUEUE)}
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
          onClick={() => controlLibrary(ViewStatus.WATCHED)}
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
          {movieTrailers?.length === 0 ? '>> trailer <<' : '>> info <<'}
        </Button>
      </ButtonItem>
    </ButtonList>
  );
};
