import React from 'react';
import Row from './row';
import {Table} from 'reactbulma';

export class Dir_list extends React.Component{

	render(){
		return (
			<div className='aaa'>
				<Table bordered striped>
				  <Table.Body>
				    <Table.Tr >
				      <Table.Th>One</Table.Th>
				      <Table.Th>Two</Table.Th>
				    </Table.Tr>
				    <Table.Tr>
				      <Table.Td>One</Table.Td>
				      <Table.Td>Two</Table.Td>
				    </Table.Tr>
				  </Table.Body>
				</Table>
			</div>
		);	
	}
}
