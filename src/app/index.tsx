import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from './providers';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider>template-vite-react-ts-fsd</Provider>
  </React.StrictMode>,
);
