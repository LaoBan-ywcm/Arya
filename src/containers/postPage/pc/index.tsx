import Post from '@components/post';
import Footer from '@containers/footer/pc';
import Header from '@containers/postHeader/pc';
import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './style.less';

const PostPage: React.FC = () => {
  const { id: postID } = useParams();

  // 页面加载完后，滚动到最前面
  setTimeout(() => window.scrollTo(0, 0), 150);

  return (
    <div className={styles.postPage}>
      <div>
        <Header />
      </div>
      <div className={styles.post}>
        <Post postID={postID as string} />
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default PostPage;
