import * as React from "react";
import * as ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from "./routes/Root";
import Tambah from "./routes/tambah"

import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/tambah',
        element: <Tambah />
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
