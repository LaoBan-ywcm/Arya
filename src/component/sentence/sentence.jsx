import './sentence.less';

import axios from 'axios';
import { useEffect, useState } from 'react';
import useTypewriter from 'react-typewriter-hook';

const url = 'https://v1.hitokoto.cn/?c=a&min_length=10&max_length=30&encode=text';

const getSentence = async (sentenceUrl) => {
  const resp = await axios.get(sentenceUrl);
  return resp;
};

const Sentence = () => {
  const [sentenceText, setSentence] = useState('');
  const content = useTypewriter(sentenceText);

  useEffect(() => {
    getSentence(url)
      .then((resp) => resp.data)
      .then((data) => setSentence(data));

    const id = setInterval(() => {
      getSentence(url)
        .then((resp) => resp.data)
        .then((data) => setSentence(data));
    }, 5000);

    return () => {
      clearInterval(id);
    };
  }, [1]);

  return (
    <div className="sentence_span">
      <span className="sentence_blog_name">鱼丸粗面的博客</span>
      <span>
        {content}
      </span>
    </div>
  );
};

export default Sentence;

