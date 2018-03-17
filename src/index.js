import React from 'react';
import ReactDOM from 'react-dom';
import './assets/index.css';
import { Home } from './container/Home';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Home />,document.getElementById('root'));
registerServiceWorker();
