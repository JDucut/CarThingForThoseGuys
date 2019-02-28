const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

//allow cross-origin requests
app.use(cors());


app.use('/graphql', graphqlHTTP({
    schema,
    graphiql:true
}));

mongoose.connect('mongodb+srv://admin:test123@cluster0-ehawo.mongodb.net/VehicleDatabase?retryWrites=true');
mongoose.connection.once('open', () =>{
    console.log('connected to database');
})

app.listen(4000, ()=>{
    console.log('now listening for requests on port 4000');
});
