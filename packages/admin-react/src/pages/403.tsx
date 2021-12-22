import React from 'react';
import { Button, Result } from 'antd';

/**
 * 403 page.
 *
 * @see https://ant.design/components/result-cn/#components-result-demo-403
 */
const Page: React.FC = () => {
  return (
    <Result
      status="403"
      title="403"
      subTitle="Sorry, you are not authorized to access this page."
      extra={<Button type="primary">Back Home</Button>}
    />
  );
};

export default Page;
