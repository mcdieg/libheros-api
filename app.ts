import express from 'express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import { ApolloServer, gql } from 'apollo-server';
import { resolvers } from './resolvers/resolvers';
let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


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
  type Booking {
    id: ID!
    room: [Room!]
    date: String
  }
  type Query {
    rooms: [Room]
    room(description: String!): Room!
    bookings: [Booking]
  }`;

// const resolvers = {
//   Query: {
//     rooms: () => rooms,
//     room: (parent, args) => dataSources.roomService.getRoom(args.description)
//   },
// };

const server = new ApolloServer({ typeDefs, resolvers });


server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

module.exports = app 