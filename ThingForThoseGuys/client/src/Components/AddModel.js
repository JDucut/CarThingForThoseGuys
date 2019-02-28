import React, { Component } from 'react';
import {graphql} from 'react-apollo';
import { addModelMutation, getModelsQuery } from '../queries/queries';

class AddModel extends Component{
    constructor(props){
        super(props);
        this.state = {
            name:'',
            year:'',
            make:''
        };
    }

    submitForm(e){
        e.preventDefault();
        this.props.addModelMutation({
            variables:{
                name: this.state.name,
                year:this.state.year,
                make:this.state.make
            },
            refetchQueries:[{query:getModelsQuery}]
        });
    }

    render(){
        return (
            
            <form onSubmit={this.submitForm.bind(this)}>
            <h2>Add vehicle</h2>
            <div>
                <label>Make</label>
                <input type="text" onChange= {(e)=> this.setState({make:e.target.value})} />
            </div>
            <div>
                <label>Name</label>
                <input type="text" onChange= {(e)=> this.setState({name:e.target.value})} />
            </div>
            <div>
                <label>Year</label>
                <input type="text" onChange= {(e)=> this.setState({year:e.target.value})} />
            </div>
            <button>Submit</button>
            </form>
        );
    }
}

export default graphql(addModelMutation, {name:"addModelMutation"})(AddModel);