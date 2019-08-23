const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const { ApolloServer, gql } = require('apollo-server');
const rooms = require('./routes/rooms')
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())


const typeDefs = gql`
  type Room {
    name: String
    description: String
    capacity: Int!
    equipements: [Equipement]
    createdAt: String
    updatedAt: String
  }
  type Equipement {
    name: String
  }
  type Query {
    rooms: [Room]
  }`;

const resolvers = {
  Query: {
    rooms: () => rooms,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });


server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

module.exports = app;
