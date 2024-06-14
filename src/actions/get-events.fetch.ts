import { EventModel } from '@/models/event.model';

export async function getEvents(): Promise<EventModel[]> {
  const response = await fetch('http://localhost:8000/events', {
    // cache: 'no-store', // sem cache nenhum
    // next: {
    //   revalidate: 10, // revalidar a cada 10 segundos
    // },
    next: {
      tags: ['events'], // tag para revalidar sob demanda
    },
  });
  return response.json();
}
