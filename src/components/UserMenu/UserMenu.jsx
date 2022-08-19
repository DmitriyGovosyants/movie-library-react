import { signOut } from 'firebase/auth';
import { auth } from 'services/firebase/frebaseConfig';
import { UserMenuBox, UserName, LogoutBtn } from './UserMenu.styled';

export const UserMenu = ({ user }) => {
  return (
    <UserMenuBox>
      <UserName>{user}</UserName>
      <LogoutBtn type="button" onClick={() => signOut(auth)}>
        Log out
      </LogoutBtn>
    </UserMenuBox>
  );
};
