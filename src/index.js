import React from 'react';
import ReactDOM from 'react-dom';
import './assets/index.css';
//import { Page } from './container/loading-page';
//import { Results } from './container/searchresult'
//import { Loader } from './components/loader';
import { Routes } from './routes';
//import { BrowserRouter, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<Routes />,document.getElementById('root'));
registerServiceWorker();


