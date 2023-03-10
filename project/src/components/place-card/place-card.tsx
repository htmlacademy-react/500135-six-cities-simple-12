import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

function PlaceCard(): JSX.Element {
  return (
    <article className='cities__card place-card'>
      <div className='cities__image-wrapper place-card__image-wrapper'>
        <Link to={AppRoute.Room}>
          <img
            className='place-card__image'
            src='img/room.jpg'
            width='260'
            height='200'
            alt='Place img'
          />
        </Link>
      </div>
      <div className='place-card__info'>
        <div className='place-card__price-wrapper'>
          <div className='place-card__price'>
            <b className='place-card__price-value'>&euro;80</b>
            <span className='place-card__price-text'>&#47;&nbsp;night</span>
          </div>
        </div>
        <div className='place-card__rating rating'>
          <div className='place-card__stars rating__stars'>
            <span style={{ width: '80%' }}></span>
            <span className='visually-hidden'>Rating</span>
          </div>
        </div>
        <h2 className='place-card__name'>
          <Link to={AppRoute.Room}>Wood and stone place</Link>
        </h2>
        <p className='place-card__type'>Private room</p>
      </div>
    </article>
  );
}

export default PlaceCard;
