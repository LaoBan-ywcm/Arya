import './index.css'

import { Layout } from 'antd'
import ReactDOM from 'react-dom/client'

import Banner from './component/banner/banner'
const { Header, Footer, Content } = Layout

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <div className='app'>
    <Layout>
      <Header>
        <Banner></Banner>
      </Header>
      <Content>Content</Content>
      <Footer>Footer</Footer>
    </Layout>
  </div>
)
