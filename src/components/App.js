import React from 'react';
import FormComponent from './FormComponent';
import TableComponent from './TableComponent';

export default class App extends React.Component{
    constructor(){
        super();
        this.state = ({
            dataSource: []
        })
    }

    storeData(row){
        // console.log(row.name);
        // console.log(row.role);
        // console.log(row.date);
        this.setState({
            dataSource: this.state.dataSource.concat([row])
        })
    }

    render(){
        console.log(this.state.dataSource);
        let formElement = <FormComponent handleDataStore={this.storeData.bind(this)}/>;
        let tableElement = <TableComponent dataSource={this.state.dataSource}/>

        return(
            <div className='container' style={{marginTop: '4%'}}>
                {formElement}
                {tableElement}
            </div>
        );
    }
}
