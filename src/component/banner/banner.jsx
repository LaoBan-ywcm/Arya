import './banner.less';

import { faSortDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import BlogMenu from '../menu/menu';
import Sentence from '../sentence/sentence';

const Banner = () => (

  <div className="banner_box">
    <div className="item-1">
      <span className="menu_blog_name">鱼丸粗面的博客</span>
    </div>
    <div />
    <div className="item-3">
      <BlogMenu />
    </div>
    <div className="item-4">
      <Sentence />
    </div>
    <div className="item-5">
      <FontAwesomeIcon icon={faSortDown} />
    </div>
    <div className="overlay_box" />
  </div>
);

export default Banner;
