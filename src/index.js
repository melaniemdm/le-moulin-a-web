import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from "./components/Header";
import reportWebVitals from './reportWebVitals';
import { HashRouter as Router } from "react-router-dom";
import Presentation from './components/Presentation';
import Bandeau from './components/Bando';
import Number from './components/Number';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <Header />
    <Bandeau/>
    <Number/>
    <Presentation/>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
