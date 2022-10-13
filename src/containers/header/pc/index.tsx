import Nav from '@components/nav';
import Sentence from '@components/sentence';
import Slide from '@components/slide';
import React from 'react';
import styles from './style.less';

const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.nav}>
        <Nav />
      </div>
      <div className={styles.sentence}>
        <Sentence />
      </div>
      <div className={styles.slide}>
        <Slide />
      </div>
      <div className={styles.overlayBox}></div>
    </div>
  );
};

export default Header;
