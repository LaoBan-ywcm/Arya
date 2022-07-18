import './index.less';

import ReactDOM from 'react-dom/client';

import Banner from './component/banner/banner';
import PostViews from './component/post_view/post_view';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div id="app">
    <div className="header">
      <Banner />
    </div>
    <div className="content">
      <PostViews />
    </div>
    <div className="footer">Footer</div>
  </div>
);
