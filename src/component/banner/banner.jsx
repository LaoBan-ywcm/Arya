import './banner.less';

import BlogMenu from '../menu/menu';
import Sentence from '../sentence/sentence';

const Banner = () => (

  <div className="banner_box">
    <div className="out_menu_box">
      <BlogMenu />
    </div>
    <div className="out_sentence">
      <Sentence />
    </div>
    <div className="overlay_box" />
  </div>
);

export default Banner;
