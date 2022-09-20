import { CreditCardOutlined, FolderOpenOutlined, HomeOutlined, SearchOutlined, TagsOutlined } from '@ant-design/icons';
import { website } from '@common/constant';
import { Col, Menu, Row } from 'antd';
import React from 'react';
import styles from './style.less';

const items = [
  {
    label: '搜索',
    key: 'search',
    icon: <SearchOutlined />
  },
  { label: '主页', key: 'home', icon: <HomeOutlined /> },
  { label: '归档', key: 'archive', icon: <CreditCardOutlined /> },
  { label: '标签', key: 'tag', icon: <TagsOutlined /> },
  { label: '分类', key: 'category', icon: <FolderOpenOutlined /> }
];

const Nav: React.FC = () => {
  return (
    <div className={styles.nav}>
      <Row>
        <Col span={8}>
          <a className={styles.websiteName} href={website.url}>
            {website.name}
          </a>
        </Col>
        <Col span={8} offset={8}>
          <Menu items={items} mode="horizontal" className={styles.menu}></Menu>
        </Col>
      </Row>
    </div>
  );
};

export default Nav;
