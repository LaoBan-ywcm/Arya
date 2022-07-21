import './post_view.less';

import { faBoxArchive, faCalendarPlus, faTags } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Page from './pagination';
import {
  fetchPosts, selectAllPosts, selectPostsCount, selectPostsStatus
} from './post_slice';

const PostImg = ({ post }) => {
  const {
    cover
  } = post;

  return (
    <div className="post_cover">
      <img className="post_bg" src={cover} alt="" />
    </div>
  );
};

const PostInfo = ({ post }) => {
  const {
    title, ctime, categories, tags, content
  } = post;

  return (
    <div className="post_info">
      <span id="post_title">{title}</span>
      <div className="post_meta_info">
        <span id="post_time">
          <FontAwesomeIcon id="post_icon" icon={faCalendarPlus} />
          发表于
          {ctime}
        </span>
        <span id="post_meta_line">|</span>
        <span id="post_category">
          <FontAwesomeIcon id="post_icon" icon={faBoxArchive} />
          {categories}
        </span>
        <span id="post_meta_line">|</span>
        <span id="post_tag">
          <FontAwesomeIcon id="post_icon" icon={faTags} />
          {tags.join(',')}
        </span>
      </div>
      <div id="post_content">{`${content.substr(0, 61)}...`}</div>
    </div>
  );
};

const PostView = ({
  post, index
}) => {
  const renderContent = (index % 2 === 0) ? (
    <div className="post">
      <PostImg post={post} />
      <PostInfo post={post} />
    </div>
  ) : (
    <div className="post">
      <PostInfo post={post} />
      <PostImg post={post} />
    </div>
  );

  return renderContent;
};

const PostViews = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const dispatch = useDispatch();
  const posts = useSelector(selectAllPosts);
  const postStatus = useSelector(selectPostsStatus);
  const postTotal = useSelector(selectPostsCount);

  const handlerPageClick = (page, pageSize) => {
    setCurrentPage(page);

    // 翻页后跳转到第一个文章
    const postAnchor = document.getElementById('post_anchor');
    if (postAnchor) { postAnchor.scrollIntoView(); }
  };

  useEffect(() => {
    if (postStatus === 'idle') {
      dispatch(fetchPosts(currentPage));
    }
  }, [currentPage]);

  const renderPosts = posts.map((post, index) => (
    <PostView post={post} key={post.id} index={index} />
  ));

  return (
    <div>
      <div className="post_box">
        <div className="post_grid_box">
          {renderPosts}
        </div>
      </div>
      <Page page={currentPage} pageSize={10} total={postTotal} changePage={handlerPageClick} />
    </div>

  );
};

export default PostViews;
