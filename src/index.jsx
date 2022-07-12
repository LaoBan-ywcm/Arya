import './index.less';

import { Layout } from 'antd';
import { Content, Footer, Header } from 'antd/lib/layout/layout';
import ReactDOM from 'react-dom/client';

import Banner from './component/banner/banner';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div id="app">
    <Layout>
      <Header className="header">
        <Banner />
      </Header>
      <Content className="content">Content</Content>
      <Footer className="footer">Footer</Footer>
    </Layout>
  </div>
);
