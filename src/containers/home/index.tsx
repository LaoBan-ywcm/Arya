import PostsView from '@components/postView';
import Footer from '@containers/footer/pc';
import Header from '@containers/header/pc';
import React from 'react';
import styles from './style.less';

const Home: React.FC = () => {
  return (
    <div className={styles.app}>
      <div className={styles.appHeader}>
        <Header />
      </div>
      <div className={styles.appPostView}>
        <PostsView />
      </div>
      <div className={styles.appFooter}>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
