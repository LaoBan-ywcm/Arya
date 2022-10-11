import React from 'react';
import styles from './style.less';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return <div className={styles.footer}>{`©2018 - ${year} By KaKa`}</div>;
};

export default Footer;
