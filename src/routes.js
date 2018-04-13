import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { Results } from './components/searchresult';
import { Page } from './components/loading-page';
export class Routes extends React.Component {
 render(){
     return(
        <BrowserRouter>
            <div>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/searchresults" component={Results} />
                    <Route exact path="/loader" component={Page} />
            </div>
        </BrowserRouter>
     );
    }
}