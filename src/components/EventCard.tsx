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
        width={400}
        height={200}
        priority
      />

      <div className="p-4">
        <h2 className="text-xl text-black font-bold">{event.name}</h2>

        <p className="text-gray-700 mt-2">
          {`${new Date(event.date).toLocaleDateString()} às ${new Date(
            event.date
          )
            .toLocaleTimeString()
            .substring(0, 5)}`}
        </p>

        <p className="text-gray-700 mt-2">
          {`Tem ${event.available_spots} lugares disponíveis`}
        </p>

        <p className="text-gray-700 mt-2">
          {`R$ ${event.price.toFixed(2).replace('.', ',')}`}
        </p>

        <p className="text-gray-700 mt-2 flex justify-end">
          <Link
            href={`/events/${event.id}/spots-layout`}
            className="w-40 h-10 bg-gray-800 hover:bg-gray-500 flex items-center justify-center text-zinc-50 font-bold py-2 px-4 rounded transition-colors duration-200"
          >
            Reservar Lugar
          </Link>
        </p>
      </div>
    </div>
  );
}
