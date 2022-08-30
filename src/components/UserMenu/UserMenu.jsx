import { signOut } from 'firebase/auth';
import { auth } from 'services/firebase/frebaseConfig';
import {
  UserMenuBox,
  Avatar,
  UserBar,
  AvatarBig,
  UserName,
  UserContent,
  Title,
  Link,
} from './UserMenu.styled';
import { Button, ButtonClose, Modal } from 'components';
import { useState, useRef } from 'react';
import { toast } from 'react-toastify';
import { avatarArr } from 'helpers/avatarArray';
import { CSSTransition } from 'react-transition-group';
import { addAvatar, fetchAvatar } from 'services/libraryApi';
import { useEffect } from 'react';
import { useUser } from 'hooks/userContext';

export const UserMenu = () => {
  const { user } = useUser();
  const nodeRef = useRef(null);
  const [showUserBar, setShowUserBar] = useState(false);
  const [avatarIndex, setAvatarIndex] = useState(0);

  useEffect(() => {
    const fetch = async () => {
      const snapshot = await fetchAvatar(user);
      if (snapshot.exists()) {
        const avatarId = snapshot.val().avatarId;
        setAvatarIndex(avatarId);
      }
    };
    fetch();
  }, [user]);

  const handleLogOut = () => {
    signOut(auth);
    toast.success('You are logged out');
  };

  const changeAvatar = () => {
    if (avatarArr.length === avatarIndex + 1) {
      addAvatarInLibrary(0);
      return setAvatarIndex(0);
    }

    addAvatarInLibrary(avatarIndex + 1);
    setAvatarIndex(s => s + 1);
  };

  const addAvatarInLibrary = async avatarId => {
    try {
      await addAvatar(user, avatarId);
    } catch (error) {
      toast.error(`We cannot add avatar in Library`);
    }
  };

  return (
    <UserMenuBox>
      <Avatar
        onClick={() => setShowUserBar(true)}
        src={avatarArr[avatarIndex]}
        alt="avatar"
      />
      <CSSTransition
        in={showUserBar}
        timeout={350}
        nodeRef={nodeRef}
        unmountOnExit={true}
        classNames="userBar"
      >
        <Modal closeModal={() => setShowUserBar(false)}>
          <UserBar ref={nodeRef}>
            <ButtonClose onClick={() => setShowUserBar(false)} />
            <AvatarBig
              onClick={changeAvatar}
              src={avatarArr[avatarIndex]}
              alt="avatar"
            />
            <UserName>{user?.email}</UserName>
            <UserContent>
              <Title>- Useful links -</Title>
              <Link
                href="https://github.com/DmitriyGovosyants/movie-library-react"
                rel={'noopener noreferrer'}
                target={'_blank'}
                aria-label="Developer Linkedin Contact"
              >
                {'>>'} Movie Library documentation
              </Link>
              <Link
                href="https://spacerangers.gitlab.io/#/quests"
                rel={'noopener noreferrer'}
                target={'_blank'}
                aria-label="text quests"
              >
                {'>>'} Space Rangers text quests app
              </Link>
            </UserContent>
            <Button onClick={handleLogOut}>Log out</Button>
          </UserBar>
        </Modal>
      </CSSTransition>
    </UserMenuBox>
  );
};
