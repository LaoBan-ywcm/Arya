import { faSortDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styles from './style.less';

const handlerClick = () => {
  window.scrollTo({
    top: window.innerHeight,
    behavior: 'smooth'
  });
};

const Slide: React.FC = () => {
  return (
    <div className={styles.slide}>
      <FontAwesomeIcon className={styles.slideIcon} icon={faSortDown} onClick={() => handlerClick()} />
    </div>
  );
};

export default Slide;
