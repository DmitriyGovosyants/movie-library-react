import { signOut } from 'firebase/auth';
import { auth } from 'services/firebase/frebaseConfig';
import {
  UserMenuBox,
  UserName,
  UserBar,
  Avatar,
  AvatarBig,
} from './UserMenu.styled';
import { Button, ButtonClose, Modal } from 'components';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { avatarArr } from 'helpers/avatarChange';

export const UserMenu = ({ user }) => {
  const [showUserBar, setShowUserBar] = useState(false);
  const [avatarIndex, setAvatarIndex] = useState(0);

  const handleLogOut = () => {
    signOut(auth);
    toast.success('You are logged out');
  };

  const changeAvatar = () => {
    if (avatarArr.length === avatarIndex + 1) {
      return setAvatarIndex(0);
    }

    setAvatarIndex(s => s + 1);
  };

  return (
    <UserMenuBox>
      <Avatar
        onClick={() => setShowUserBar(true)}
        src={avatarArr[avatarIndex]}
        alt="avatar"
      />
      {showUserBar && (
        <Modal toggleModal={() => setShowUserBar(s => !s)}>
          <UserBar>
            <ButtonClose onClick={() => setShowUserBar(false)} />
            <AvatarBig
              onClick={changeAvatar}
              src={avatarArr[avatarIndex]}
              alt="avatar"
            />
            <UserName>{user}</UserName>
            <Button onClick={handleLogOut}>Log out</Button>
          </UserBar>
        </Modal>
      )}
    </UserMenuBox>
  );
};
