import { EventModel } from '../event.model';

export class EventFactory {
  static getOne(): EventModel {
    return {
      id: 1,
      name: 'Cerulean',
      date: '2023-09-09T00:00:00',
      image_url:
        'https://img.freepik.com/fotos-gratis/pessoas-que-participam-de-um-evento-de-alto-protocolo_23-2150951243.jpg?w=1380&t=st=1718319756~exp=1718320356~hmac=04c66eebce155ef2dccf0cd945fdc0c1269c83e574149145aaee4159d8219906',
      created_at: '2023-09-09T00:10:10',
      available_spots: 10,
      price: 100,
    };
  }

  static getList(): EventModel[] {
    return [
      {
        id: 1,
        name: 'Cerulean',
        date: '2024-06-15T20:30:00',
        image_url:
          'https://img.freepik.com/fotos-gratis/pessoas-que-participam-de-um-evento-de-alto-protocolo_23-2150951243.jpg?w=1380&t=st=1718319756~exp=1718320356~hmac=04c66eebce155ef2dccf0cd945fdc0c1269c83e574149145aaee4159d8219906',
        created_at: '2023-09-09T00:10:10',
        available_spots: 10,
        price: 100,
      },
      {
        id: 2,
        name: 'Fuchsia Rose',
        date: '2024-07-13T20:00:00',
        image_url:
          'https://img.freepik.com/fotos-gratis/pessoas-que-participam-de-um-evento-de-alto-protocolo_23-2150951243.jpg?w=1380&t=st=1718319756~exp=1718320356~hmac=04c66eebce155ef2dccf0cd945fdc0c1269c83e574149145aaee4159d8219906',
        created_at: '2023-09-09T00:10:11',
        available_spots: 20,
        price: 200,
      },
      {
        id: 3,
        name: 'True Red',
        date: '2024-08-17T21:00:00',
        image_url:
          'https://img.freepik.com/fotos-gratis/pessoas-que-participam-de-um-evento-de-alto-protocolo_23-2150951243.jpg?w=1380&t=st=1718319756~exp=1718320356~hmac=04c66eebce155ef2dccf0cd945fdc0c1269c83e574149145aaee4159d8219906',
        created_at: '2023-09-09T00:10:12',
        available_spots: 30,
        price: 300,
      },
    ];
  }
}
