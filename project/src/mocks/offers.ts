import { TypeOffers } from '../types/offer';

export const offers:TypeOffers = [
  {
    id: 1,
    foto: [
      {
        src: '/img/room.jpg'
      },
      {
        src: '/img/apartment-01.jpg'
      }
    ],
    title: '1 Beautiful & luxurious studio at great location',
    description: ['A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.', 'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful', 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.', 'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful'],
    premium: true,
    typeOffer: 'Apartment',
    rating: 5,
    bedrooms: 3,
    maxPeople: 4,
    price: 120,
    listItems: ['Coffee machine', 'Dishwasher', 'Towels', 'Baby seat', 'Cabel TV'],
    infoHost: {
      avatar: '/img/avatar-angelina.jpg',
      name: 'Angelina',
      pro: true
    },
    reviews: [1,2]
  },
  {
    id: 2,
    foto: [
      {
        src: '/img/apartment-02.jpg'
      },
      {
        src: '/img/apartment-01.jpg'
      }
    ],
    title: '2 Beautiful & luxurious studio at great location',
    description: ['A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.', 'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful'],
    premium: false,
    typeOffer: 'Apartment',
    rating: 4.8,
    bedrooms: 3,
    maxPeople: 4,
    price: 120,
    listItems: [],
    infoHost: {
      avatar: '/img/avatar-angelina.jpg',
      name: 'Angelina',
      pro: false
    },
    reviews: [1]
  },
  {
    id: 3,
    foto: [
      {
        src: '/img/apartment-03.jpg'
      },
      {
        src: '/img/apartment-01.jpg'
      }
    ],
    title: '3 Beautiful & luxurious studio at great location',
    description: ['An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful'],
    premium: true,
    typeOffer: 'Apartment',
    rating: 4,
    bedrooms: 3,
    maxPeople: 4,
    price: 120,
    listItems: ['Wi-Fi', 'Heating', 'Kitchen', 'Fridge', 'Washing machine', 'Coffee machine', 'Dishwasher', 'Towels', 'Baby seat', 'Cabel TV'],
    infoHost: {
      avatar: '/img/avatar-angelina.jpg',
      name: 'Angelina',
      pro: true
    },
    reviews: []
  },
  {
    id: 4,
    foto: [
      {
        src: '/img/apartment-01.jpg'
      },
      {
        src: '/img/apartment-01.jpg'
      }
    ],
    title: '4 Beautiful & luxurious studio at great location',
    description: [],
    premium: false,
    typeOffer: 'Apartment',
    rating: 1.8,
    bedrooms: 3,
    maxPeople: 4,
    price: 120,
    listItems: ['Wi-Fi', 'Baby seat', 'Cabel TV'],
    infoHost: {
      avatar: '/img/avatar-angelina.jpg',
      name: 'Angelina',
      pro: true
    },
    reviews: [1]
  }
];
