import React from 'react';
import { Auth0Provider } from "@auth0/auth0-react";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Router } from 'react-router-dom';
// import {useRedirectCallback} from "./components/login"

const root = ReactDOM.createRoot(document.getElementById('root'));

// {console.log("Window href : ",window.location.href)}
root.render(
  // <Router>
  <BrowserRouter>
    <App /></BrowserRouter>
    // </Router> 
);
