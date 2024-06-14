import { EventModel } from '@/models/event.model';
import Image from 'next/image';
import Link from 'next/link';

type EventCardProps = {
  event: EventModel;
};

export function EventCard({ event }: EventCardProps) {
  return (
    <div className="bg-zinc-200 shadow-lg rounded-lg">
      <Image
        className="w-full h-48 object-cover rounded-t-lg"
        src={event.image_url}
        alt={event.name}
        width={300}
        height={192}
      />
      <div className="p-4">
        <h2 className="text-xl text-black font-bold">{event.name}</h2>
        <p className="text-gray-700 mt-2">
          {new Date(event.date).toLocaleDateString()}
        </p>
        <p className="text-gray-700 mt-2">
          Tem {event.available_spots} lugares disponíveis
        </p>
        <p className="text-gray-700 mt-2">
          R$ {event.price.toFixed(2).replace('.', ',')}
        </p>
        <p className="text-gray-700 mt-2 flex justify-end">
          <Link
            href={`/events/${event.id}/spots-layout`}
            className="bg-zinc-800 hover:bg-zinc-600 text-zinc-50 font-bold py-2 px-4 rounded transition-colors duration-200"
          >
            Reservar Lugar
          </Link>
        </p>
      </div>
    </div>
  );
}
