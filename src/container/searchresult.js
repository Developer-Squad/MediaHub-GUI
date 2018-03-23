import React from 'react';
import { Logo } from '../components/logo';
import { Navbar } from '../components/navbar';
//import { Row } from '../components/row';
import { Home } from './Home';
import {Dir_list} from '../components/dir_list';
export class Results extends React.Component {
    render(){
        var file_des = {
            filename:"qwerty",
            filesize:"15MB",
            filetype:"folder"
        };
        return (
            <div className='aaa'>
            <Navbar />
            <br /><br /><br />
            <Dir_list />
            </div>
        );
    }
}