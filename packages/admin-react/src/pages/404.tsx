import React from 'react';
import { Button, Result } from 'antd';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

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
    subTitle="Sorry,not found."
    extra={<Button type="primary">Back Home</Button>}
  />
);

export default NotFound;
