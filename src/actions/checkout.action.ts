import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function checkoutAction(formData: FormData) {
  'use server';
  const cookieStore = cookies();
  const eventId = cookieStore.get('eventId')?.value;
  if (!eventId) {
    return { error: 'ID do event não está disponível.' };
  }
  const reservedSpotRaw = cookieStore.get('spots')?.value;
  const reservedSpots = reservedSpotRaw ? JSON.parse(reservedSpotRaw) : [];
  if (reservedSpots.length == 0) {
    return { error: 'Selecione ao menos um assento.' };
  }

  await fetch(`http://localhost:8000/events/${eventId}/reserve`, {
    method: 'POST',
    body: JSON.stringify({
      spots: reservedSpots,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  cookieStore.set('spots', '');
  cookieStore.set('eventId', '');
  redirect('/');
}
