import { EventCard } from '@/components/EventCard';
import { EventFactory } from '@/models/factory/event.factory';

export default function Home() {
  const events = EventFactory.getList();

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
