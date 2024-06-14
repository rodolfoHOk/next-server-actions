import { EventAndSpots } from '@/models/event-and-spots.model';

export async function getEvent(eventId: number): Promise<EventAndSpots> {
  const response = await fetch(`http://localhost:8000/events/${eventId}`, {
    // cache: 'no-store',
    next: {
      tags: [`events/${eventId}`],
    },
  });
  return response.json();
}
