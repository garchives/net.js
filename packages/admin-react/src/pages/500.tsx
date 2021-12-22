import React from 'react';
import { Result, Button } from 'antd';

/**
 * 500 page.
 *
 * @see https://ant.design/components/result-cn/#components-result-demo-500
 */
const ServerError: React.FC = () => {
  return (
    <Result
      status="500"
      title="500"
      subTitle="Sorry, something went wrong."
      extra={<Button type="primary">Back Home</Button>}
    />
  );
};

export default ServerError;
