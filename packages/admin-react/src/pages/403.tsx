import React from 'react';
import { Result } from 'antd';
import { Link } from 'react-router-dom';

/**
 * 403 page.
 *
 * @see https://ant.design/components/result-cn/#components-result-demo-403
 */
const Forbidden: React.FC = () => {
  return (
    <Result
      status="403"
      title="403"
      subTitle="您没有足够的权限访问该页面"
      extra={<Link to="/">前往首页</Link>}
    />
  );
};

export default Forbidden;
