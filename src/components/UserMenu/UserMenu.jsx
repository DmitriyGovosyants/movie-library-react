import { signOut } from 'firebase/auth';
import { auth } from 'services/firebase/frebaseConfig';
import { UserMenuBox, UserName, UserBar, Avatar } from './UserMenu.styled';
import { Button, ButtonClose, Modal } from 'components';
import { useState } from 'react';
import avatar from 'data/images/header/avatar.png';

export const UserMenu = ({ user }) => {
  const [showUserBar, setShowUserBar] = useState(false);

  return (
    <UserMenuBox>
      {/* <Button onClick={() => setShowUserBar(true)}>USER IMG</Button>
       */}
      <Avatar onClick={() => setShowUserBar(true)} src={avatar} alt="avatar" />
      {showUserBar && (
        <Modal toggleModal={() => setShowUserBar(s => !s)}>
          <UserBar>
            <ButtonClose onClick={() => setShowUserBar(false)} />
            <Avatar src={avatar} alt="avatar" big />
            <UserName>{user}</UserName>
            <Button onClick={() => signOut(auth)}>Log out</Button>
          </UserBar>
        </Modal>
      )}
    </UserMenuBox>
  );
};
