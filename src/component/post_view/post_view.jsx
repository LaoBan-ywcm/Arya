import './post_view.less';

import { faBoxArchive, faCalendarPlus, faTags } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchPosts, selectAllPost } from './post_slice';

const PostView = ({
  post
}) => {
  const {
    title, time, category, tag, content
  } = post;
  return (
    <div className="post">
      <div className="post_cover">
        <img className="post_bg" src="https://blog-img-1256171178.cos.ap-beijing.myqcloud.com/%E5%88%87%E5%B0%94%E8%AF%BA%E8%B4%9D%E5%88%A9%E4%BA%8B%E4%BB%B6%2Fthumbnail.png" alt="" />
      </div>
      <div className="post_info">
        <span id="post_title">{title}</span>
        <div className="post_meta_info">
          <span id="post_time">
            <FontAwesomeIcon id="post_icon" icon={faCalendarPlus} />
            发表于
            {time}
          </span>
          <span id="post_meta_line">|</span>
          <span id="post_category">
            <FontAwesomeIcon id="post_icon" icon={faBoxArchive} />
            {category}
          </span>
          <span id="post_meta_line">|</span>
          <span id="post_tag">
            <FontAwesomeIcon id="post_icon" icon={faTags} />
            {tag}
          </span>
        </div>
        <div id="post_content">{`${content.substr(0, 61)}...`}</div>
      </div>
    </div>
  );
};

const PostViews = () => {
  const dispatch = useDispatch();
  const postStatus = useSelector((state) => state.posts.state);
  const posts = useSelector(selectAllPost);

  useEffect(() => {
    if (postStatus === 'idle') {
      dispatch(fetchPosts());
    }
  }, [postStatus, dispatch]);

  const renderPosts = posts.map((post) => (
    <PostView post={post} key={post.id} />
  ));

  return (
    <div className="post_box">
      <div className="post_grid_box">
        {renderPosts}
      </div>
    </div>
  );
};

export default PostViews;
