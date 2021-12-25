import React from 'react';
import { Result, Button } from 'antd';
import { Link } from 'react-router-dom';

/**
 * 500 page.
 *
 * @see https://ant.design/components/result-cn/#components-result-demo-500
 */
const InternalServerError: React.FC = () => {
  return (
    <Result
      status="500"
      title="500"
      subTitle="请休息一会儿再来访问"
      extra={<Link to="/">前往首页</Link>}
    />
  );
};

export default InternalServerError;
