import React from 'react';
//import { Loader } from './loader';
import { Link } from 'react-router-dom';
import { Loader } from './loader';
export class Button extends React.Component {
   /* constructor(props) {
        super(props);
        this.state={
            location:"home"
        }
        this.handleClick=this.handleClick.bind(this);
    }*/
    render(){
        return (
                <Link to="searchresults">
                    <button className="searchbutton"></button>
                </Link>
        );
    }


}
