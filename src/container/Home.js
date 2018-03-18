import React from 'react';
import { Logo } from '../components/logo';
import { Searchbar } from '../components/searchbar';
//import { Row } from '../components/dir_listing';

export class Home extends React.Component {
    render(){
        /*var file_des = {
            filename:"qwerty",
            filesize:"15MB",
            filetype:"mp3"
        };*/
        return (
            <div className="logos">
            <Logo />
            <Searchbar />
            {/*<Row file={file_des} />*/}
            </div>
        );
    }
}
