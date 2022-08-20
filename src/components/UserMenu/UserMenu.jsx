import { signOut } from 'firebase/auth';
import { auth } from 'services/firebase/frebaseConfig';
import { UserMenuBox, UserName } from './UserMenu.styled';
import { Button } from 'components';

export const UserMenu = ({ user }) => {
  return (
    <UserMenuBox>
      <UserName>{user}</UserName>
      <Button size={'small'} onClick={() => signOut(auth)}>
        Log out
      </Button>
    </UserMenuBox>
  );
};
