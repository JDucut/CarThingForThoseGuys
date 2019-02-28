import React, { Component } from 'react';
import { graphql, compose} from 'react-apollo';
import {getModelQuery, updateModelMutation} from '../queries/queries';

class UpdateModel extends Component{
    displayDetails(){
        const {model} = this.props.data;
        if(model){
            return(
                
                <form id="update-model" onSubmit={this.submitForm.bind(this)}>
                    <h3>Update Model</h3>
                    <lable>Model Name</lable>
                    <input type="text" onChange= {(e) => this.setState({ name:e.target.value})}></input>

                    <label>Make</label>
                    <input type="text" onChange= {(e)=> this.setState({make:e.target.value})}></input>

                    <label>Year</label>
                    <input type="text" onChange= {(e)=> this.setState({ genre:e.target.value})}></input>
                
                <button>Update</button>
                </form>
               
            )
        }
    }

    submitForm(e){
        e.preventDefault();
        this.props.updateModelMutation({
            variables:{
                name: this.state.name,
                make: this.state.make,
                year: this.state.year
            }
        });
    }

    render(){
        return(
            <div>
                {this.displayDetails()}
            </div>
        );
    }
}

export default compose ( graphql(getModelQuery, {
    options: (props) => {
        return {
            variables: {
                id: props.modelID
            }
        }
    }
}),
(graphql(updateModelMutation, {name:"updateModelMutation"})))(UpdateModel);