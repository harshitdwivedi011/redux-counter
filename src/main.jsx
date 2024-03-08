import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import Store from './redux/Store'
import App from './App';
import './index.css'

const root = document.getElementById('root');

const rootInstance = createRoot(root);
rootInstance.render(
  <Provider store={Store}>
    <App />
  </Provider>
);