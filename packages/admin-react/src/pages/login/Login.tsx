import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import React, { Fragment } from 'react';
import './Login.css';
import logo from './logo.svg';

/**
 * Login page.
 *
 * @returns
 */
const Login: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  return (
    <Fragment>
      <div className="login-container">
        <div className="login-title">
          <img alt="futurepx" src={logo} className="logo" />
          <span className="font">FUTUREPX</span>
        </div>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: '请输入用户名！' }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: '请输入密码！' }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>记住我</Checkbox>
            </Form.Item>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button display-block"
            >
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </Fragment>
  );
};

export default Login;
