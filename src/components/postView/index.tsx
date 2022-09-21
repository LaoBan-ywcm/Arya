import React, { useEffect, useState } from 'react';
import { useAppDispatch } from '../../hooks/store';
import { fetchPostsView } from './store';

const PostsView: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPostsView(currentPage));
  }, [currentPage]);

  return <div>123</div>;
};

export default PostsView;
