import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Home } from './container/Home';
import { Results } from './container/searchresult';
import { Page } from './container/loading-page';
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