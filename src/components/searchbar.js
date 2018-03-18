import React from 'react';
import "../assets/index.css";
import { Button } from './button'; 

export class Searchbar extends React.Component {
    render() {
    return (
            <div className="search">
                <input className="searchbar" />
	           	<Button />
            </div>
        );
    }
}
