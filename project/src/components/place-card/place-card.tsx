import { useState } from 'react';
import { Link, generatePath } from 'react-router-dom';
import { AppRoute } from '../../const';
import { TypeOffer } from '../../types/offer';


type PlaceCardType = {
  offer:TypeOffer;
  key: number;
};

export function PlaceCard({ offer, key }:PlaceCardType): JSX.Element {
  const [activeCard, setActiveCard] = useState(0);

  return (
    <article
      className='cities__card place-card'
      onMouseOver={() => {
        setActiveCard(offer.id);
      }}
      onMouseLeave={() => {
        setActiveCard(0);
      }}
    >
      {
        offer.premium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      }
      <div className='cities__image-wrapper place-card__image-wrapper'>
        <Link to={generatePath(AppRoute.Room, { id: `${offer.id}`})}>
          <img
            className='place-card__image'
            src={offer.foto[0].src}
            width='260'
            height='200'
            alt='Place img'
          />
        </Link>
      </div>
      <div className='place-card__info'>
        <div className='place-card__price-wrapper'>
          <div className='place-card__price'>
            <b className='place-card__price-value'>&euro;{offer.price}</b>
            <span className='place-card__price-text'>&#47;&nbsp;night</span>
          </div>
        </div>
        <div className='place-card__rating rating'>
          <div className='place-card__stars rating__stars'>
            <span style={{ width: `${offer.rating * 20}%` }}></span>
            <span className='visually-hidden'>Rating</span>
          </div>
        </div>
        <h2 className='place-card__name'>
          <Link to={generatePath(AppRoute.Room, { id: `${offer.id}`})}>{offer.title}</Link>
        </h2>
        <p className='place-card__type'>{offer.typeOffer}{activeCard}</p>
      </div>
    </article>
  );
}
