import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';

import ModelList from './Components/ModelList';
import AddModel from './Components/AddModel';

const client = new ApolloClient({
  uri:'http://localhost:4000/graphql'
})

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div id="main">
        <h1>Car thing for those Guys</h1>
        <ModelList/>
        </div>
        <AddModel/>
      </ApolloProvider>
    );
  }
}

export default App;
