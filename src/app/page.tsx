import { getEvents } from '@/actions/get-events.action';
import { EventCard } from '@/components/EventCard';

export default async function Home() {
  const events = await getEvents();

  return (
    <main className="container max-w-7xl min-h-screen m-auto bg-zinc-950 px-4 py-8">
      <p className="font-bold text-3xl mb-8 text-zinc-50">Show disponíveis</p>

      <div className="grid grid-cols-3 gap-8">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </main>
  );
}
