import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Layout } from 'antd';
const { Header, Footer, Content } = Layout;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Layout>
      <Header>Header</Header>
      <Content>Content</Content>
      <Footer>Footer</Footer>
    </Layout>
  </div>
);


