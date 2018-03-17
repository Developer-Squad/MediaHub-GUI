import React from 'react';
import { Logo } from '../components/logo';
import { Searchbar } from '../components/searchbar';

export class Home extends React.Component {
    render() {
    const myhome = (<div className="logos">
                    <Logo />
                    <Searchbar />
                </div>
                );
    return (myhome);
    }
}
