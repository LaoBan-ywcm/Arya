import Header from '@containers/header/PCHeader';
import React from 'react';
import styles from './style.less';

const Home: React.FC = () => {
  return (
    <div className={styles.app}>
      <div className={styles.appHeader}>
        <Header />
      </div>
    </div>
  );
};

export default Home;
