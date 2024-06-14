import { SpotSeat } from '@/components/SpotSeat';
import { EventAndSpotsFactory } from '@/models/factory/event-and-spots.factory';
import Link from 'next/link';

type SpotsLayoutPageProps = {
  params: {
    eventId: string;
  };
};

export default function SpotsLayoutPage({ params }: SpotsLayoutPageProps) {
  console.log(params.eventId);
  const { event, spots } = EventAndSpotsFactory.getOne();

  const rowLetters = spots.map((spot) => spot.name[0]);
  const uniqueRowLetters = rowLetters.filter(
    (letter, index) => rowLetters.indexOf(letter) === index
  );
  const spotGroupedByRow = uniqueRowLetters.map((letter) => {
    return {
      row: letter,
      spots: spots.filter((spot) => spot.name[0] === letter),
    };
  });

  return (
    <form>
      <input type="hidden" name="eventId" value={event.id} />

      <div className="container max-w-7xl min-h-screen m-auto bg-zinc-950 py-8 px-4 flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-8">Assentos</h1>

        {spotGroupedByRow.map((row) => (
          <div key={row.row} className="flex flex-row gap-4 items-center mb-4">
            <div className="w-4">{row.row}</div>

            <div className="ml-2 flex flex-row">
              {row.spots.map((spot, key) => (
                <SpotSeat
                  key={key}
                  spotId={spot.name}
                  spotLabel={spot.name.slice(1)}
                  reserve={false}
                  disabled={false}
                />
              ))}
            </div>
          </div>
        ))}

        <p className="text-zinc-50 mt-4">{`Assentos escolhidos: ${'to do'}`}</p>

        <p className="mt-4">
          <button
            type="submit"
            className="w-32 h-10 bg-zinc-50 hover:bg-gray-700 hover:text-zinc-50 text-zinc-950 font-bold  rounded transition-colors duration-200"
          >
            Reservar
          </button>
        </p>

        <p className="mt-6 flex">
          <Link
            href="/checkout"
            className="w-32 h-10 bg-gray-700 hover:bg-gray-500 hover:text-zinc-50 flex items-center justify-center text-zinc-50 font-bold rounded transition-colors duration-200"
          >
            Comprar
          </Link>
        </p>
      </div>
    </form>
  );
}
