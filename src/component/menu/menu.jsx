import './menu.less';

import {
  faBoxArchive, faFolderOpen, faHouseChimney, faMagnifyingGlass, faTags
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Menu } from 'antd';

const items = [
  {
    label: '搜索', key: 'search', icon: <FontAwesomeIcon icon={faMagnifyingGlass} />
  },
  { label: '主页', key: 'home', icon: <FontAwesomeIcon icon={faHouseChimney} /> },
  { label: '归档', key: 'archive', icon: <FontAwesomeIcon icon={faBoxArchive} /> },
  { label: '标签', key: 'tag', icon: <FontAwesomeIcon icon={faTags} /> },
  { label: '分类', key: 'category', icon: <FontAwesomeIcon icon={faFolderOpen} /> }
];

const BlogMenu = () => (
  <div>
    <span className="menu_blog_name">鱼丸粗面的博客</span>
    <Menu className="menu" items={items} mode="horizontal" />
  </div>
);

export default BlogMenu;
