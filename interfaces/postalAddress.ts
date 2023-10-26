export interface IPostalAddress {
  '@id': string;
  '@type': string;
  id: number;
  addressCountry: string | null;
  addressLocality: string | null;
  addressRegion: string | null;
  postalCode: string | null;
  streetAddress: string | null;
}
