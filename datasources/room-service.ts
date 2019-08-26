import { DataSource }  from 'apollo-datasource';

export class RoomService extends DataSource {
    constructor() {
        super();
    }

    initialize() {}

    getRooms() {
        return Promise.resolve(rooms);
    }

    getRoom(description) {
        return Promise.resolve(findRoom(description));
    }

    getBookings() {
        return Promise.resolve(bookings)
    }

    getBooking(id) {
        return Promise.resolve(findBooking(id))
    }

    createBooking(bookingInput, roomId) {
        const match = bookings.find(booking => booking.roomId === roomId && booking.date === bookingInput.date)
        if (match) throw Error(`This room is already booked on ${bookingInput.date}, please try another date`)  
        const booking = Object.assign({}, bookingInput, { id: newId(), roomId });
        bookings.push(booking);
        return Promise.resolve(booking);
    }

    createRoom(roomInput) {
        const room = Object.assign({}, roomInput, { id: newId() });
        rooms.push(room)
        return Promise.resolve(room); 
    }

    getRoomBookings(roomId) {
        return Promise.resolve(
            bookings.filter(booking => booking.roomId === roomId)
        )
    }

    getBookingRoom(bookingId) {
        const booking = findBooking(bookingId);
        const room = booking ? findRoom(booking.roomId) : null;
        return Promise.resolve(room)
    }
}

function newId() {
    return Math.random()
        .toString(36)
        .substring(7);
}

function findRoom(id) {
    return rooms.find(room => room.id === id);
}

function findBooking(id) {
    return bookings.find(booking => booking.id === id)
}


let bookings = []
let rooms = [
    {
      "name":"Salle Google",
      "description":"Salle Google",
      "capacity":5,
      "equipements":[
          {
            "name":"TV"
          },
          {
            "name":"Retro Projecteur"
          }
      ],
      "id": "1",
      "createdAt":"2016-12-07T12:39:29.812Z",
      "updatedAt":"2016-12-08T17:31:39.489Z"
    },
    {
      "name":"Salle Apple",
      "description":"Salle Apple",
      "capacity":10,
      "equipements":[
          {
            "name":"Retro Projecteur"
          }
      ],
      "id": "2",
      "createdAt":"2016-12-07T12:39:55.384Z",
      "updatedAt":"2016-12-07T13:33:37.184Z"
    },
    {
      "name":"Salle Facebook",
      "description":"Salle Facebook",
      "capacity":11,
      "equipements":[],
      "id": "3",
      "createdAt":"2016-12-07T14:15:55.733Z",
      "updatedAt":"2016-12-09T16:45:19.025Z"
    },
    {
      "name":"Salle Amazon",
      "description":"Salle Amazon",
      "capacity":10,
      "equipements":[
          {
            "name":"TV"
          },
          {
            "name":"Retro Projecteur"
          }
      ],
      "id": "4",
      "createdAt":"2016-12-09T16:45:34.419Z",
      "updatedAt":"2016-12-09T16:45:34.419Z"
    },
    {
      "name":"Salle Baidu",
      "description":"Salle Baidu",
      "capacity":26,
      "equipements":[
          {
            "name":"TV"
          },
          {
            "name":"Retro Projecteur"
          }
      ],
      "id": "5",
      "createdAt":"2016-12-09T16:45:49.096Z",
      "updatedAt":"2016-12-09T16:45:49.096Z"
    },
  {
      "name":"Salle Tencent",
      "description":"Salle Tencent",
      "capacity":8,
      "equipements":[
          {
            "name":"TV"
          }
      ],
      "id": "6",
      "createdAt":"2016-12-07T12:39:55.384Z",
      "updatedAt":"2016-12-07T13:33:37.184Z"
    }
]

