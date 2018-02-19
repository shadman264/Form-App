import React from 'react';
// import { Dropdown, DropdownMenuItem, DropdownMenu } from 'react-bootstrap';
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';
export default class FormComponent extends React.Component{
    constructor(props){
        super();
        this.state = ({
            name: '',
            role: '',
            date: ''
        })
    }

    handleNameType(e){
        this.setState({name: e.target.value});
    }

    handleSubmitClick(e){

        let row = {
            name: this.state.name,
            role: this.state.role,
            date: this.state.date
        }
        this.props.handleDataStore(row);

        // this.setState({name: e.target.value});
    }

    handleDateSelect(e){
        this.setState({
            date: e.target.value
        })
    }

    handleRoleSelect(e){
        this.setState({role: e.target.value});
    }

    render(){
        return(
                <Form>
                    <FormGroup>
                        <Label>Name</Label>
                        <Input type="text" placeholder="type your name" onChange={this.handleNameType.bind(this)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label>Role</Label>
                        <Input type="select" placeholder="select an option" onChange={this.handleRoleSelect.bind(this)}>
                            <option >Developer</option>
                            <option>Tester</option>
                            <option>Designer</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label>Date</Label>
                        <Input type="date" onChange={this.handleDateSelect.bind(this)}/>
                    </FormGroup>
                    <Button color="success" onClick={this.handleSubmitClick.bind(this)}>Submit</Button>
                </Form>
        )
    }
}
