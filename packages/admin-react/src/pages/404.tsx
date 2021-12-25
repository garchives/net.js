import React from 'react';
import { Result } from 'antd';
import { Link } from 'react-router-dom';

/**
 * 404 page.
 *
 * @see https://github.com/ant-design/ant-design-pro/blob/all-blocks/src/pages/404.tsx
 * @see https://ant.design/components/result-cn/#components-result-demo-404
 */
const NotFound: React.FC = () => (
  <Result
    status="404"
    title="404"
    subTitle="您访问的页面不翼而飞了"
    extra={<Link to="/">前往首页</Link>}
  />
);

export default NotFound;
