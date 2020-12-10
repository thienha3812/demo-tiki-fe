import React from 'react';
import './App.css';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import NavBar from './components/NavBar';
import HomePage from './containers/home-page';
import ProductDetail from './containers/product-detail';
import Login from './containers/login';
import store  from './store'
import Cart from './containers/cart';
import Search from './containers/search';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path={"/home"} component={HomePage} />
          <Route path={"/detail-product/:product_id?"} component={ProductDetail} />
          <Route path={"/login"} component={Login} />
          <Route path={"/cart"}  component={Cart} />
          <Route path={"/search"} component={Search} />
          <Redirect from="/" to="/home" />
          <ToastContainer/>
        </Switch>
      </Router>
    </div>
    </Provider>
  );
}

export default App;
