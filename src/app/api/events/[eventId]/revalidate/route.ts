import { revalidateTag } from 'next/cache';
import { NextRequest } from 'next/server';

type RouteParams = {
  params: {
    eventId: string;
  };
};

export function POST(req: NextRequest, { params }: RouteParams) {
  revalidateTag('events');
  revalidateTag(`events/${params.eventId}`);
  return new Response(null, { status: 204 });
}
