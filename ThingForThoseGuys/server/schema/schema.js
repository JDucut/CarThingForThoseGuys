const graphql = require('graphql');
const _= require('lodash');
const Model = require('../models/model');

const{ GraphQLObjectType, 
    GraphQLString, 
    GraphQLSchema,
    GraphQLID,
    GraphQLList,
    GraphQLNonNull
    } = graphql;

const ModelType = new GraphQLObjectType({
    name: 'Model',
    fields:()=>({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        year: {type: GraphQLString},
        make: {type: GraphQLString}
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields:{
        models:{
            type: new GraphQLList(ModelType),
            resolve(parent, args){
                return Model.find({});
            }
        },
        model:{
            type: ModelType,
            args:{id: {type: GraphQLID}},
            resolve(parent, args){
                return Model.findById(args.id);
            }
        }
    }
});

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields:{
        addModel:{
            type: ModelType,
            args:{
                name: {type: new GraphQLNonNull(GraphQLString)},
                year: {type: new GraphQLNonNull(GraphQLString)},
                make: {type: new GraphQLNonNull(GraphQLString)}
            },

            resolve(parent, args){
                let model = new Model({
                    name: args.name,
                    year: args.year,
                    make: args.make
                });

                return model.save();
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});