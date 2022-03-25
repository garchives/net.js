/**
 * An entrypoint file that cannot be renamed.
 */

import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import routes from 'src/routes';
import 'antd/dist/antd.css';
import './index.css';

ReactDOM.render(
  // React Router V6
  <Router>
    <Routes>
      {routes
        .filter((_) => _.show === true)
        .map((_) => {
          return <Route path={_.path} element={<_.page />} />;
        })}
    </Routes>
  </Router>,
  // see 'public/index.html'
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
