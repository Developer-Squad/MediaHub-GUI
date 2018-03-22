import React from 'react';
import { Logo } from '../components/logo';
import { Searchbar } from '../components/searchbar';
//import { Row } from '../components/dir_listing';
import { Results } from './searchresult';
export class Home extends React.Component {
    render(){
        /*var file_des = {
            filename:"qwerty",
            filesize:"15MB",
            filetype:"mkv"
        };*/
        return (
            <div className="home-item">
            <Logo className="home-logo"/>
            <Searchbar className="home-search" component={<Results />}/>
            {this.props.children}
           {/* {<Row file={file_des} />} */}
            </div>
        );
    }
}