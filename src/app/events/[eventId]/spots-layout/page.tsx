import Link from 'next/link';
import { cookies } from 'next/headers';
import { SpotSeat } from '@/components/SpotSeat';
import { getEvent } from '@/actions/get-event.fetch';
import { reserveSpotsAction } from '@/actions/reserve-spots.action';

type SpotsLayoutPageProps = {
  params: {
    eventId: string;
  };
};

export default async function SpotsLayoutPage({
  params,
}: SpotsLayoutPageProps) {
  const { event, spots } = await getEvent(parseInt(params.eventId));

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

  const reservedSpotRaw = cookies().get('spots')?.value;
  const reservedSpots: string[] = reservedSpotRaw
    ? JSON.parse(reservedSpotRaw)
    : [];

  return (
    <form action={reserveSpotsAction}>
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
                  reserve={reservedSpots.includes(spot.name)}
                  disabled={spot.status === 'sold'}
                />
              ))}
            </div>
          </div>
        ))}

        <p className="text-zinc-50 mt-4">
          <span className="font-bold">Assentos escolhidos: </span>
          <span>{reservedSpots.join(', ')}</span>
        </p>

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
