import { getPost } from '@components/post/store';
import React, { useEffect } from 'react';
import { useAppSelector } from '../../../hooks/store';
import styles from './style.less';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  const post = useAppSelector(getPost);

  useEffect(() => {
    const hb = document.getElementById('footer');
    const cover = post?.cover;
    if (hb && cover) {
      hb.style.backgroundImage = `url('${cover}')`;
    }
  }, [post]);

  return (
    <div className={styles.footerBox} id="footer">
      <div className={styles.footer}>{`©2018 - ${year} By KaKa`}</div>
      <div className={styles.overlayBox}></div>
    </div>
  );
};

export default Footer;
