import ReactDOM from 'react-dom/client';
import { MainPage } from '~pages/main';
import { Provider } from './providers';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider>
    <MainPage />
  </Provider>,
);
