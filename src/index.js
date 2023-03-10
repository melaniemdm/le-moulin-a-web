import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/style.scss';
import Header from "./components/Header";
import reportWebVitals from './reportWebVitals';
import { HashRouter as Router } from "react-router-dom";
import Presentation from './components/Presentation';
import Number from './components/Number';
import Realisations from './components/Realisations';
import Prestations from './components/Prestations';
import Expertise from './components/Expertise';
import Reference from './components/Reference';
import Contact from './components/Contact';
import Footer from './components/Footer';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <Header />  <Contact/>
     <Number/>
   <Presentation/>
    <Realisations/>
    <Prestations/>
    <Expertise/>
    <Reference/>
  <Footer/>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
