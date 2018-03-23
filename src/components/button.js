import React from 'react';
//import { Loader } from './loader';
import { Link } from 'react-router-dom';
import { Loader } from './loader';
export class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            location:"searchresults"
        }
        this.handleLoad=this.handleLoad.bind(this);
    }
    handleLoad()
    {
        setTimeout(() => {
            this.setState({ location: "loader" });
          }, 3000);          
    }
    render(){
        return (
                <Link to={this.state.location}>
                    <button className="searchbutton" onLoad={this.handleLoad}></button>
                </Link>
        );
    }
}
