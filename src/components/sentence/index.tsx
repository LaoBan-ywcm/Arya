import { website } from '@common/constant';
import { Col, Row } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useTypewriter from 'react-typewriter-hook';
import styles from './style.less';

const url = 'https://v1.hitokoto.cn/?c=a&min_length=10&max_length=30&encode=text';

const getSentence = async (sentenceUrl: string) => {
  const resp = await axios.get(sentenceUrl);
  return resp;
};

const Sentence: React.FC = () => {
  const [sentenceText, setSentence] = useState('');
  const content = useTypewriter(sentenceText);

  useEffect(() => {
    getSentence(url)
      .then((resp) => resp.data as string)
      .then((data) => setSentence(data))
      .catch((err) => console.log(err));

    const id = setInterval(() => {
      getSentence(url)
        .then((resp) => resp.data as string)
        .then((data) => setSentence(data))
        .catch((err) => console.log(err));
    }, 5000);
    return () => {
      clearInterval(id);
    };
  }, [1]);

  return (
    <div className={styles.sentence}>
      <Row className={styles.websiteName}>
        <Col span={24}>
          <span>{website.name}</span>
        </Col>
      </Row>
      <Row className={styles.content}>
        <Col span={24}>
          <span>{content}</span>
        </Col>
      </Row>
    </div>
  );
};

export default Sentence;
