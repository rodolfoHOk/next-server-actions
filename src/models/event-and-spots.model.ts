import { EventModel } from './event.model';
import { SpotModel } from './spot.model';

export type EventAndSpots = {
  event: EventModel;
  spots: SpotModel[];
};
