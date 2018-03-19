import React from 'react';
import { Logo } from '../components/logo';
import { Searchbar } from '../components/searchbar';

export class Navbar extends React.Component {
    render(){
        return (
            <div className='navbar'>
                <Logo className="nav-logo" />
                <Searchbar className="nav-search"/>
            </div>
        );
    }
} 