import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { getEvent } from '@/actions/get-event.fetch';
import { checkoutAction } from '@/actions/checkout.action';

export default async function CheckoutPage() {
  const cookiesStore = cookies();
  const eventId = cookiesStore.get('eventId')?.value;
  if (!eventId) {
    redirect('/');
  }
  const { event } = await getEvent(parseInt(eventId));
  const reservedSpotRaw = cookiesStore.get('spots')?.value;
  const reservedSpots: string[] = reservedSpotRaw
    ? JSON.parse(reservedSpotRaw)
    : [];

  return (
    <form>
      <div className="container max-w-7xl min-h-screen m-auto bg-zinc-950 py-8 px-4 flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-8">Checkout</h1>

        <div className="bg-zinc-50 shadow-lg rounded-lg overflow-hidden">
          <div className="p-4">
            <h2 className="text-xl text-black font-bold">Resumo do pedido</h2>

            <p className="text-gray-700 mt-2">
              Assentos selecionados: {reservedSpots.join(', ')}
            </p>

            <p className="text-gray-700 mt-2">{`Total: R$ ${
              reservedSpots.length * event.price
            }`}</p>

            <p className="text-gray-700 mt-2 flex justify-end">
              <button
                type="submit"
                className="w-fit h-10 bg-gray-950 hover:bg-gray-600 text-zinc-50 font-bold px-4 rounded transition-colors duration-200"
              >
                Confirmar compra
              </button>
            </p>
          </div>
        </div>
      </div>
    </form>
  );
}
