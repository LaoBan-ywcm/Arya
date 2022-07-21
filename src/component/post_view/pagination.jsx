import './pagination.less';

import { Pagination } from 'antd';

const Page = ({
  page, pageSize, total, changePage
}) => {
  const handleClick = (p, pz) => changePage(p, pz);

  return (
    <div className="page_box">
      <Pagination
        current={page}
        pageSize={pageSize}
        total={total}
        onChange={handleClick}
      />
    </div>
  );
};

export default Page;
