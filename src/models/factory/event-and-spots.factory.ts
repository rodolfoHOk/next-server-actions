import { EventAndSpots } from '../event-and-spots.model';

export class EventAndSpotsFactory {
  static getOne(): EventAndSpots {
    return {
      event: {
        id: 1,
        name: 'Cerulean',
        date: '2024-06-15T20:30:00',
        image_url:
          'https://img.freepik.com/fotos-gratis/pessoas-que-participam-de-um-evento-de-alto-protocolo_23-2150951243.jpg?w=1380&t=st=1718319756~exp=1718320356~hmac=04c66eebce155ef2dccf0cd945fdc0c1269c83e574149145aaee4159d8219906',
        created_at: '2023-09-09T00:10:10',
        available_spots: 10,
        price: 100,
      },
      spots: [
        {
          id: 1,
          name: 'A1',
          status: 'available',
          event_id: 1,
        },
        {
          id: 2,
          name: 'A2',
          status: 'available',
          event_id: 1,
        },
        {
          id: 3,
          name: 'A3',
          status: 'available',
          event_id: 1,
        },
        {
          id: 4,
          name: 'A4',
          status: 'available',
          event_id: 1,
        },
        {
          id: 5,
          name: 'A5',
          status: 'available',
          event_id: 1,
        },
        {
          id: 6,
          name: 'B1',
          status: 'available',
          event_id: 1,
        },
        {
          id: 7,
          name: 'B2',
          status: 'available',
          event_id: 1,
        },
        {
          id: 8,
          name: 'B3',
          status: 'available',
          event_id: 1,
        },
        {
          id: 9,
          name: 'B4',
          status: 'available',
          event_id: 1,
        },
        {
          id: 10,
          name: 'B5',
          status: 'available',
          event_id: 1,
        },
      ],
    };
  }
}
