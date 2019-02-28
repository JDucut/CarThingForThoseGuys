import React, { Component } from 'react';
import {graphql} from 'react-apollo';
import { getModelsQuery } from '../queries/queries';

import UpdateModel from './UpdateModel';

class ModelList extends Component {
    constructor(props){
        super(props);
        this.state = {
            selected: null
        }
    }
    displayModels(){
        var data = this.props.data;

        if(data.loading){
            return(<div>Loading models...</div>)
        }else{
            return data.models.map(model => {
                return(
                    <li key={model.id} onClick={(e) => {this.setState({selected: model.id})}}>{model.make} {model.name} {model.year} </li>
                )
            })
        }
    }

    render(){
        return (
            <div>
                <ul>
                    {this.displayModels()}
                </ul>
                <UpdateModel modelID={this.state.selected}/>
            </div>
        )
    }
    
}

export default graphql(getModelsQuery)(ModelList);