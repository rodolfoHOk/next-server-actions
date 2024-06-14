import { cookies } from 'next/headers';

export async function reserveSpotsAction(formData: FormData) {
  'use server';
  const spots = formData.getAll('spots');
  if (spots.length == 0) {
    return { error: 'Selecione ao menos um assento.' };
  }

  const cookieStore = cookies();
  cookieStore.set('spots', JSON.stringify(spots));
  cookieStore.set('eventId', formData.get('eventId') as string);
}
