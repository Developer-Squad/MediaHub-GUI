import React from 'react';
import ReactDOM from 'react-dom';
import './assets/index.css';
import { Home } from './container/Home';
import {Results} from './container/searchresult'
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';


class Display extends React.Component {
    constructor(props){
        super(props);
        this.state = {display: '/'};
        this.handleClick = this.handleClick.bind(this);
        this.component = this.component.bind(this);
    }
    component(){
        if(this.state.display == '/'){
            return (<Results />);
        }
        else if(this.state.display == '/home'){
            return (<Home />);
        }
    }

    handleClick(){
        if(this.state.display == '/home'){
            this.setState({display:'/'});
        }
        else{
            this.setState({display:'/home'});
        }
        return this.component();
    }
    render(){
        return (
            <div className="aaa">
            <button className="sss" onClick= {this.handleClick}>Change</button>
            {this.component.call()}
            </div>
        );
    }


}

ReactDOM.render(<Display />,document.getElementById('root'));
registerServiceWorker();


