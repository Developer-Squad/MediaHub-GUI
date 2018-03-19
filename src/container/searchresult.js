import React from 'react';
import { Logo } from '../components/logo';
import { Navbar } from '../components/navbar';
import { Row } from '../components/row';

export class Results extends React.Component {
    render(){
        var file_des = {
            filename:"qwerty",
            filesize:"15MB",
            filetype:"folder"
        };
        return (
            <div>
            <Navbar />
            <br /><br /><br />
            <Row file={file_des} />
            </div>
        );
    }
}