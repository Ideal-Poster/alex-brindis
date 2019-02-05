import React from 'react';
import Header from '../components/header/header';

import AppRoutes from '../routing/routes';

import './App.css'
import 'antd/dist/antd.css';

import { BrowserRouter as Router, Route } from "react-router-dom";


const App = () => (
  <div className="App">
    <Header/>
    <Router>
      <Route path="/" component={AppRoutes}/>
    </Router>
  </div>
);

export default App;
