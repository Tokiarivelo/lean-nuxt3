import { IPostalAddress } from './postalAddress';
import { ISector } from './sector';

export interface IStore {
  '@id': string;
  '@type': string;
  id: number;
  name: String | null;
  openingHours: string[] | null;
  currenciesAccepted: string[] | null;
  paymentAcceptedType: string | null;
  priceRange: string[] | null;
  aggregateRating: number | null;
  createdAt: string | null;
  status: string | null;
  prefectoralApprovalNumber: string | null;
  cedex: string | null;
  postalAddress: IPostalAddress | null;
  sector: ISector | null;
}
