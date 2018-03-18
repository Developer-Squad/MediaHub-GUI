import React from 'react';
/*import { Logo } from '../components/logo';
import { Searchbar } from '../components/searchbar';*/
import { Row } from '../components/dir_listing';
export class Home extends React.Component {
    render() {
    var file_obj = {filename: 'qw',
                    filetype: 'mp3',
                    filesize: '23'
                };
    const myhome = (<div className="logos">
                    <Row file = {file_obj}/>
                </div>
                );
    return (myhome);
    }
}
