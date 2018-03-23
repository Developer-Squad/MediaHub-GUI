import React from 'react';
import Row from './row';

export class Dir_list extends React.Component{

	render(){
		var type = this.props.file.filetype
		var b = this.props.file.filename;
		var c = this.props.file.filesize;
        if(type === 'mp4' || type === 'mkv' || type === 'avi')
            var tag = <img src = {require('../assets/video.png')} className="image-dir" />;
        else if(type === 'mp3' || type === 'wav')
            var tag = <img src={require('../assets/music.png')} className="image-dir" />;
        else if(type === 'folder')
            var tag = <img src={require('../assets/folder.png')} className="image-dir" />;
        else
            var tag = <img src={require('../assets/icon.png')} className="image-dir" />;
		/*return (
			<div >
				<Table>
				  <Table.Body is-large>
				    <Table.Tr >
				      <Table.Th>{tag}</Table.Th>
				      <Table.Th>{b}</Table.Th>
				      <Table.Th>{c}</Table.Th>
				    </Table.Tr>
				    <Table.Tr>
				      <Table.Td>One</Table.Td>
				      <Table.Td>Two</Table.Td>
				      <Table.Td>Three</Table.Td>
				    </Table.Tr>
				  </Table.Body>
				</Table>
			</div>
		);	*/
		var dd = (
			<table className="table is-fullwidth is-hoverable pagal">
		 		<tr>
					<th>Icon</th>
					<th>Name</th>
					<th>Description</th>
				</tr>
				<tr>
	      			<td>{tag}</td>
	      			<td>{b}</td>
	      			<td>{c}</td>
	    		</tr>

	    	    <tr>
	    			<td>{tag}</td>
	      			<td>{b}</td>
	      			<td>{c}</td>
	   			</tr>
	   		</table>
	   	);		
		return(
				dd
			);
	}
}
