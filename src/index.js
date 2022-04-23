import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from "react-router-dom"
import './index.css';
import { Sketchy } from './components/Sketchy';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router><Sketchy /></Router>
  </React.StrictMode>
);
