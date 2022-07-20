import './index.less';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import store from './app/store';
import Banner from './component/banner/banner';
import PostViews from './component/post_view/post_view';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <div id="app">
        <div className="header">
          <Banner />
        </div>
        <div className="content">
          <PostViews />
        </div>
        <div className="footer">Footer</div>
      </div>
    </Provider>
  </React.StrictMode>

);
