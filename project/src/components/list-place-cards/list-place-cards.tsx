import { TypeOffers, TypeOffer } from '../../types/offer';
import { PlaceCard } from '../place-card/place-card';

type ListPlaceCardType = {
  offers: TypeOffers;
};

function ListPlaceCard({ offers }:ListPlaceCardType): JSX.Element {
  return (
    <div className='cities__places-list places__list tabs__content'>
      {
        offers.map((offer:TypeOffer) =>
          <PlaceCard key={offer.id} offer={offer} />
        )
      }
    </div>
  );
}

export default ListPlaceCard;
