import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import './08-useReducer/intro-reducer';
import { MainApp } from './09-useContext/MainApp';

import { getRoutes } from './09-useContext/Routes';

const router = getRoutes();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>
);

