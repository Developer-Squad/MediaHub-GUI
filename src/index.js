import React from 'react';
import ReactDOM from 'react-dom';
import './assets/index.css';
import { Home } from './container/Home';
//import { Results } from './container/searchresult'
//import { Button } from './components/button';
import { Routes } from './routes';
//import { BrowserRouter, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<Routes />,document.getElementById('root'));
registerServiceWorker();


