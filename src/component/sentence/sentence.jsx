import './sentence.less';

import axios from 'axios';
import { useEffect, useState } from 'react';

const url = 'https://v1.hitokoto.cn/?c=a&min_length=10&encode=text';

const getSentence = async (sentenceUrl) => {
  const resp = await axios.get(sentenceUrl);
  return resp;
};

const Sentence = () => {
  const [sentenceText, setSentence] = useState('');

  useEffect(() => {
    let id = '';
    clearInterval(id);

    getSentence(url)
      .then((resp) => resp.data)
      .then((data) => setSentence(data));

    id = setInterval(() => {
      getSentence(url)
        .then((resp) => resp.data)
        .then((data) => setSentence(data));
    }, 10000);
    return () => clearInterval(id);
  }, [1]);

  return (
    <span className="sentence_span">
      {sentenceText}
    </span>
  );
};

export default Sentence;

