import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Home } from './container/Home';
import { Results } from './container/searchresult';
import { Base } from './container/base';
export class Routes extends React.Component {
 render(){
     return(
        <BrowserRouter>
            <div>
                <Route path="/home" component={Home} />
                <Route path="/searchresults" component={Results} />
            </div>
        </BrowserRouter>
     );
    }
}