import Home from 'src/pages/home/Home';
import Login from 'src/pages/login/Login';
import NotFound from 'src/pages/404';
import React from 'react';

/**
 * 路由接口
 */
interface IRoute {
  // 名称标题
  name: string;
  // 路由地址
  path: string;
  // icon

  // 页面组件
  page: React.FC;
  // 是否显示
  show: boolean;
  // 重定向地址
  redirect?: string;
  // 子路由
  routes?: IRoute[];
  // 页面布局
  layout?: React.FC;
}

/**
 * 路由接口
 */
const routes: IRoute[] = [
  {
    name: '首页',
    path: '/',
    page: Home,
    show: true,
  },
  {
    name: '登录',
    path: '/login',
    page: Login,
    show: true,
  },
  // 404
  {
    name: '404',
    path: '*',
    page: NotFound,
    show: true,
  },
];

export default routes;
