import React from 'react';
import "../assets/index.css";
import { Button } from './button'; 

export class Searchbar extends React.Component {
    render() {
    return (
            <div className = {this.props.className}>
            <div className="search">
                <input className="searchbar" />
	           	<Button value={this.props.component}/>
            </div>
            </div>
        );
    }
}
