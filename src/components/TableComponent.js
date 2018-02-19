import React from 'react';
import { Table } from 'reactstrap';

export default class TableComponent extends React.Component{

    render(){
        let tableRows = this.props.dataSource.map((row, index)=>{
            return(
                <tr key={index}>
                    <th scope="row">{index+1}</th>
                    <td>{row.name}</td>
                    <td>{row.role}</td>
                    <td>{row.date}</td>
                </tr>
            )
        })
        return(
            <Table striped bordered style={{marginTop: '3%'}}>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Role</th>
                    <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {tableRows}
                </tbody>
            </Table>
        )
    }
}
