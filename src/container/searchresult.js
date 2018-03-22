import React from 'react';
import { Logo } from '../components/logo';
import { Navbar } from '../components/navbar';
<<<<<<< HEAD
//import { Row } from '../components/row';
import { Home } from './Home';
import {Dir_list} from '../components/dir_list';
=======
import { Row } from '../components/row';
import { Home } from './Home';
>>>>>>> f7738ac299e621d25dbf297f88dc6f26abefb1df
export class Results extends React.Component {
    render(){
        var file_des = {
            filename:"qwerty",
            filesize:"15MB",
            filetype:"folder"
        };
        return (
<<<<<<< HEAD
            <div className='aaa'>
            <Navbar search={<Home />}/>
            <br /><br /><br />
            <Dir_list />
=======
            <div>
            <Navbar search={<Home />}/>
            <br /><br /><br />
            <Row file={file_des} />
>>>>>>> f7738ac299e621d25dbf297f88dc6f26abefb1df
            </div>
        );
    }
}