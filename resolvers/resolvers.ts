import { dataSources } from '../datasources';
import { PubSub } from 'apollo-server';

const ROOM_MUTATED = 'roomMutated';
const pubsub = new PubSub();

export const resolvers = {
  Query: {
    rooms: () => dataSources.roomService.getRooms(),
    bookings: () => dataSources.roomService.getBookings(),
    room: (parent, args) => dataSources.roomService.getRoom(args.description)
  },
  Mutation : {
    createRoom(parent, args) {
      return dataSources.roomService
        .createRoom({
          name: args.name
        })
        .then(room => {
          pubsub.publish(ROOM_MUTATED, {
            roomMutated: {
              mutation: 'CREATED',
              node: room
            }
          })
          return room;
        })
    },
    createBooking(parent, args) {
      const { roomId, ...rest } = args.booking;
      return dataSources.roomService
        .createBooking({
          ...rest
        },
        roomId
      )
    }
  },
  Booking: {
    room(parent) {
      return dataSources.roomService.getBookingRoom(parent.id)
    }
  }
};