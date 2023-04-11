export type Foto = {
  src: string;
};

export type Host = {
  avatar: string;
  name: string;
  pro: boolean;
};

export type TypeOffer = {
  id: number;
  foto: Foto[];
  title: string;
  description: string[];
  premium: boolean;
  typeOffer: string;
  rating: number;
  bedrooms: number;
  maxPeople: number;
  price: number;
  listItems: string[];
  infoHost: Host;
  reviews: number[];
};

export type TypeOffers = TypeOffer[];
