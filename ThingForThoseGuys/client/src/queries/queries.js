import { gql } from 'apollo-boost';

const getModelsQuery = gql `
    query GetModels{
        models {
            name
            year
        }
    }
`

const getModelQuery = gql `
    query GetModel($id:Id){
        model(id:$id){
            id
            name
            year
            make{
                id
                name
            }
        }
    }
`

const addModelMutation = gql `
    mutation AddModel($name: String!, $year: String!, $make: String!){
        addModel(name: $name, year: $year, make: $make){
            name
            year
            make
        }
    }
`

const deleteModelMutation = gql `
    mutation DeleteModel($id: ID!){
        deleteModel(id: $id){
            name
        }
    }
`

const updateModelMutation = gql `
    mutation UpdateModel($id: Id!, $name: String, $make: String, $year: String){
        updateModel(id: $id, name: $name, year: $year, make: $make){
            name
        }
    }
`


export {getModelsQuery, getModelQuery, addModelMutation, deleteModelMutation, updateModelMutation};