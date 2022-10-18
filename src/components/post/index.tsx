import styles from './style.less';

import React, { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import bash from 'react-syntax-highlighter/dist/cjs/languages/prism/bash';
import go from 'react-syntax-highlighter/dist/cjs/languages/prism/go';
import json from 'react-syntax-highlighter/dist/cjs/languages/prism/json';
import markdown from 'react-syntax-highlighter/dist/cjs/languages/prism/markdown';
import scss from 'react-syntax-highlighter/dist/cjs/languages/prism/scss';
import tsx from 'react-syntax-highlighter/dist/cjs/languages/prism/tsx';
import typescript from 'react-syntax-highlighter/dist/cjs/languages/prism/typescript';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import remarkGfm from 'remark-gfm';
import { useAppDispatch, useAppSelector } from '../../hooks/store';
import { fetchPost, getPost, getPostState } from './store';

/* eslint-disable */
SyntaxHighlighter.registerLanguage('tsx', tsx);
SyntaxHighlighter.registerLanguage('typescript', typescript);
SyntaxHighlighter.registerLanguage('scss', scss);
SyntaxHighlighter.registerLanguage('bash', bash);
SyntaxHighlighter.registerLanguage('markdown', markdown);
SyntaxHighlighter.registerLanguage('json', json);
SyntaxHighlighter.registerLanguage('golang', go);
/* eslint-disable */

interface PostProps {
  postID: string;
}

const Post: React.FC<PostProps> = ({ postID }) => {
  const postStatus = useAppSelector(getPostState);
  const postContent = useAppSelector(getPost);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (postStatus === 'idle') {
      dispatch(fetchPost(postID));
    }
  }, [postID]);

  return (
    <div className={styles.postContent}>
      <ReactMarkdown
        children={postContent?.content as string}
        remarkPlugins={[remarkGfm]}
        components={{
          img: ({ node, ...props }) => <img className={styles.img} {...props} />,
          code: ({ node, inline, className, children, ...props }) => {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match ? (
              <SyntaxHighlighter
                children={String(children).replace(/\n$/, '')}
                style={oneDark}
                language={match[1]}
                PreTag="div"
                showLineNumbers={true}
              />
            ) : (
              <code className={styles.inlineCode} {...props}>
                {children}
              </code>
            );
          }
        }}
      />
    </div>
  );
};

export default Post;
