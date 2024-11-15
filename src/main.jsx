import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from './routes/root';
import Tambah from './routes/tambah';
import { DataProvider } from './data';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Root />
  </React.StrictMode>
);
