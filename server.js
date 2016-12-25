require('babel/register');
var express = require('express');
var graphql = require('graphql');
var expressGraphql = require('express-graphql');
var Schema = require('./server/schema.js');

var app = express();

app.use('/', expressGraphql({
  schema: Schema,
  graphiql: true
}));
app.use('/graphql', expressGraphql({
  schema: Schema,
}));

app.listen(3000);
console.log('GraphQL started on port: 3000');