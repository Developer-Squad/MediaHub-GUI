import React from 'react';
//import Table from './dir_list'
import { Table } from 'reactbulma'; 
export class Row extends React.Component {
    render() {
        const type = this.props.file.filetype;
        if(type === 'mp4' || type === 'mkv' || type === 'avi')
            var tag = <td><img src = {require('../assets/video.png')} className="image-dir" /></td>;
        else if(type === 'mp3' || type === 'wav')
            var tag = <td><img src={require('../assets/music.png')} className="image-dir" /></td>;
        else if(type === 'folder')
            var tag = <td><img src={require('../assets/folder.png')} className="image-dir" /></td>;
        else
            var tag = <td><img src={require('../assets/icon.png')} className="image-dir" /></td>;
        //const tag = <img src = {require('../assets/icon.png')} className="image-dir" />
        return(
<div className="aaa">
            <Table bordered>
  <Table.Body>
    <Table.Tr>
      <Table.Td>{tag}</Table.Td>
      <Table.Td>{this.props.file.filename}</Table.Td>
      <Table.Td>{this.props.file.filesize}</Table.Td>
    </Table.Tr>
  </Table.Body>
</Table>
</div>

/*
        	<tr class="row">
                {/*<td><img src = {require(src_val)} className="image-dir" /></td>}
                <td>{tag}</td>
	            <td><h3 className="filename-dir">{this.props.file.filename}</h3></td>
	            <td><h3 className="filesize-dir">{this.props.file.filesize}</h3></td>
	        </tr>*/
        );
    }
}