import { dataSources } from '../datasources';

export const resolvers = {
  Query: {
    rooms: () => dataSources.roomService.getRooms(),
    room: (parent, args) => dataSources.roomService.getRoom(args.description)
  },
};