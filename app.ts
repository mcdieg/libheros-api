const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
import { ApolloServer, gql } from 'apollo-server';
import { resolvers } from './resolvers/resolvers';
const cors = require("cors");

let app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

const typeDefs = gql`
  type Room {
    name: String
    description: String
    capacity: Int
    equipements: [Equipement]
    createdAt: String
    updatedAt: String
    id: ID
  }
  type Equipement {
    name: String
  }
  type Booking {
    id: ID!
    room: Room!
    date: String
  }
  type Query {
    rooms: [Room]
    room(description: String!): Room
    bookings: [Booking]
  }
  type Mutation {
    createBooking(booking: BookingInput!): Booking!
    createRoom(name: String!): Room!
  }
  input BookingInput {
    roomId: String!
    date: String
  }`;

const server = new ApolloServer({ typeDefs, resolvers });


server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

module.exports = app 