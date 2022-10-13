import Nav from '@components/nav';
import { getPost } from '@components/post/store';
import React, { useEffect } from 'react';
import { useAppSelector } from '../../../hooks/store';
import styles from './style.less';

const Header: React.FC = () => {
  const post = useAppSelector(getPost);

  useEffect(() => {
    const hb = document.getElementById('header');
    const cover = post?.cover;
    if (hb && cover) {
      hb.style.backgroundImage = `url('${cover}')`;
    }
  }, [post]);

  return (
    <div className={styles.header} id="header">
      <div className={styles.nav}>
        <Nav />
      </div>
      <div className={styles.info}>
        <h1>{post?.title}</h1>
      </div>
      <div className={styles.overlayBox}></div>
    </div>
  );
};

export default Header;
