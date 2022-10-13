import { faCalendarDays, faInbox, faTag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Pagination } from 'antd';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/store';
import { fetchPostsView, getPostsViewSlice, getPostsViewTotal } from './store';
import styles from './style.less';

interface PostCoverParams {
  cover: string;
  index: number;
}

const PostCover: React.FC<PostCoverParams> = ({ cover, index }) => {
  return (
    <div className={index % 2 == 1 ? styles.viewBoxImg0 : styles.viewBoxImg1}>
      <img src={cover} className={styles.img}></img>
    </div>
  );
};

interface PostInfoParams {
  title: string;
  ctime: string;
  categories: string;
  tags: Array<string>;
  content: string;
}

const PostInfo: React.FC<PostInfoParams> = ({ title, ctime, categories, tags, content }) => {
  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toISOString().slice(0, 10);
  };

  return (
    <div>
      <div className={styles.viewBoxInfo}>
        <span className={styles.title}>{title}</span>
        <div className={styles.metadata}>
          <FontAwesomeIcon className={styles.icon} icon={faCalendarDays} />
          <span>发表于{formatDate(ctime)}</span>
          <span className={styles.divider}>|</span>
          <FontAwesomeIcon className={styles.icon} icon={faInbox} />
          <span>{categories}</span>
          <span className={styles.divider}>|</span>
          <FontAwesomeIcon className={styles.icon} icon={faTag} />
          <span>{tags.join('•')}</span>
        </div>
        <div className={styles.content}>{content}</div>
      </div>
    </div>
  );
};

const PostsView: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const dispatch = useAppDispatch();
  const navigator = useNavigate();
  const postsViews = useAppSelector((state) => getPostsViewSlice(state));
  const total = useAppSelector((state) => getPostsViewTotal(state));

  useEffect(() => {
    dispatch(fetchPostsView(currentPage));
  }, [currentPage]);

  const handlerPageChange = (page: number, pageSize: number) => {
    setCurrentPage(page);
  };

  const handlerPostViewClick = (id: string) => {
    console.log(`/post/${id}`);
    navigator(`/post/${id}`);
  };

  return (
    <div>
      <div className={styles.postsView}>
        {postsViews.map((data, index) => {
          // 文章cover图片展示在不同位置
          if (index % 2 == 1) {
            return (
              <div
                className={styles.viewBox}
                key={data.id as string}
                onClick={() => handlerPostViewClick(data.id as string)}>
                <PostInfo {...data} />
                <PostCover cover={data.cover as string} index={index} />
              </div>
            );
          }
          return (
            <div
              className={styles.viewBox}
              key={data.id as string}
              onClick={() => handlerPostViewClick(data.id as string)}>
              <PostCover cover={data.cover as string} index={index} />
              <PostInfo {...data} />
            </div>
          );
        })}
      </div>
      <div className={styles.pagination}>
        <Pagination
          current={currentPage}
          total={total}
          hideOnSinglePage={true}
          onChange={(page, pageSize) => {
            handlerPageChange(page, pageSize);
          }}
        />
      </div>
    </div>
  );
};

export default PostsView;
