import { MdLibraryAddCheck, MdLibraryAdd } from 'react-icons/md';
import { ViewConstants } from 'constants/constants';
import { Button } from 'components';
import { ButtonList, ButtonItem } from './MovieCardControl.styled';

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
          onClick={() => controlLibrary(ViewConstants.QUEUE)}
        >
          queue
          {queueStatus ? (
            <MdLibraryAddCheck size={30} style={{ marginLeft: 10 }} />
          ) : (
            <MdLibraryAdd size={30} style={{ marginLeft: '10px' }} />
          )}
        </Button>
      </ButtonItem>
      <ButtonItem>
        <Button
          size={'small'}
          isCheck={watchedStatus}
          onClick={() => controlLibrary(ViewConstants.WATCHED)}
        >
          watched
          {watchedStatus ? (
            <MdLibraryAddCheck size={30} style={{ marginLeft: 10 }} />
          ) : (
            <MdLibraryAdd size={30} style={{ marginLeft: '10px' }} />
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
