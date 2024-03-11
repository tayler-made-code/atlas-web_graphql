const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express();

const mongoDBAtlasUri = 'mongodb+srv://taylercoon:ahtgHOxu9OmZ9fGk@cluster0.lhury06.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(mongoDBAtlasUri, {useNewUrlParser: true, useUnifiedTopology: true});

mongoose.connection.once('open',()=>{
  console.log('connected to database');
});

app.use('/graphql',graphqlHTTP({
  schema,
  graphiql: true,
}));

app.listen(4000,()=>{
  console.log('now listening for request on port 4000');
});
