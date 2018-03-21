import React from 'react';
//import { Loader } from './loader';
import { Link } from 'react-router-dom';
export class Button extends React.Component {
    render(){
        return (
                <Link to="/searchresults">
                    <button className="searchbutton" ></button>
                </Link>
        );
    }


}
