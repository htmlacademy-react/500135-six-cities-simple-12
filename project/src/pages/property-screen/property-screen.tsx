import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { TypeOffers } from '../../types/offer';
import { useParams } from 'react-router-dom';
import { reviewsAll } from '../../mocks/reviews';
import { ReviewsForm } from '../../components/reviews-form/reviews-form';

type PropertyScreenType = {
  offers:TypeOffers;
};

function PropertyScreen({offers}:PropertyScreenType): JSX.Element {
  const { id } = useParams();
  const offer = offers.filter((item) => Number(item.id) === Number(id) )[0];

  return (
    <div>
      <div className='page'>
        <div style={{display: 'none'}}>
          <svg xmlns='http://www.w3.org/2000/svg'><symbol id='icon-arrow-select' viewBox='0 0 7 4'><path fillRule='evenodd' clipRule='evenodd' d='M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z'></path></symbol><symbol id='icon-bookmark' viewBox='0 0 17 18'><path d='M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z'></path></symbol><symbol id='icon-star' viewBox='0 0 13 12'><path fillRule='evenodd' clipRule='evenodd' d='M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z'></path></symbol></svg>
        </div>

        <header className='header'>
          <div className='container'>
            <div className='header__wrapper'>
              <div className='header__left'>
                <Link className='header__logo-link' to={AppRoute.Root}>
                  <img className='header__logo' src='img/logo.svg' alt='6 cities logo' width='81' height='41' />
                </Link>
              </div>
              <nav className='header__nav'>
                <ul className='header__nav-list'>
                  <li className='header__nav-item user'>
                    <div className='header__nav-profile'>
                      <div className='header__avatar-wrapper user__avatar-wrapper'></div>
                      <span className='header__user-name user__name'>Oliver.conner@gmail.com</span>
                    </div>
                  </li>
                  <li className='header__nav-item'>
                    <a className='header__nav-link' href='#todo'>
                      <span className='header__signout'>Sign out</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>

        <main className='page__main page__main--property'>
          <section className='property'>
            <div className='property__gallery-container container'>
              <div className='property__gallery'>
                {
                  offer.foto.map((item, key) =>
                    (
                      <div className='property__image-wrapper' key={item.src + key.toString()}>
                        <img className='property__image' src={item.src} alt='Photography studio' />
                      </div>
                    )
                  )
                }
              </div>
            </div>
            <div className='property__container container'>
              <div className='property__wrapper'>
                {
                  offer.premium &&
                  <div className='property__mark'>
                    <span>Premium</span>
                  </div>
                }
                <div className='property__name-wrapper'>
                  <h1 className='property__name'>
                    {offer.title}
                  </h1>
                </div>
                <div className='property__rating rating'>
                  <div className='property__stars rating__stars'>
                    <span style={{width: `${offer.rating * 20}%`}}></span>
                    <span className='visually-hidden'>Rating</span>
                  </div>
                  <span className='property__rating-value rating__value'>{offer.rating}</span>
                </div>
                <ul className='property__features'>
                  <li className='property__feature property__feature--entire'>
                    {offer.typeOffer}
                  </li>
                  <li className='property__feature property__feature--bedrooms'>
                    {offer.bedrooms} Bedrooms
                  </li>
                  <li className='property__feature property__feature--adults'>
                    Max {offer.maxPeople} adults
                  </li>
                </ul>
                <div className='property__price'>
                  <b className='property__price-value'>&euro;{offer.price}</b>
                  <span className='property__price-text'>&nbsp;night</span>
                </div>
                {
                  offer.listItems.length !== 0 &&
                  <div className='property__inside'>
                    <h2 className='property__inside-title'>What&apos;s inside</h2>
                    <ul className='property__inside-list'>
                      {
                        offer.listItems.map((item) => (
                          <li className='property__inside-item' key={item}>
                            {item}
                          </li>
                        ))
                      }
                    </ul>
                  </div>
                }
                <div className='property__host'>
                  <h2 className='property__host-title'>Meet the host</h2>
                  <div className='property__host-user user'>
                    <div className={`property__avatar-wrapper ${offer.infoHost.pro === true ? 'property__avatar-wrapper--pro' : ''} user__avatar-wrapper`}>
                      <img className='property__avatar user__avatar' src={offer.infoHost.avatar} width='74' height='74' alt='Host avatar' />
                    </div>
                    <span className='property__user-name'>
                      {offer.infoHost.name}
                    </span>
                    {
                      offer.infoHost.pro &&
                      <span className='property__user-status'>
                        Pro
                      </span>
                    }
                  </div>
                  <div className='property__description'>
                    {
                      (offer.description.map((item, key) => (
                        <p className='property__text' key={item + key.toString()}>
                          {item}
                        </p>
                      )))
                    }
                  </div>
                </div>
                <section className='property__reviews reviews'>
                  <h2 className='reviews__title'>Reviews &middot; <span className='reviews__amount'>{offer.reviews.length}</span></h2>
                  <ul className='reviews__list'>
                    {offer.reviews.map((item, key) => {
                      const reviewItem = reviewsAll.filter((filterItem) => filterItem.id === item )[0];
                      return (
                        <li className='reviews__item' key={item.toString() + key.toString()}>
                          <div className='reviews__user user'>
                            <div className='reviews__avatar-wrapper user__avatar-wrapper'>
                              <img className='reviews__avatar user__avatar' src={reviewItem.foto} width='54' height='54' alt='Reviews avatar' />
                            </div>
                            <span className='reviews__user-name'>
                              {reviewItem.name}
                            </span>
                          </div>
                          <div className='reviews__info'>
                            <div className='reviews__rating rating'>
                              <div className='reviews__stars rating__stars'>
                                <span style={{width: `${reviewItem.rating * 20}%`}}></span>
                                <span className='visually-hidden'>Rating</span>
                              </div>
                            </div>
                            <p className='reviews__text'>
                              {reviewItem.review}
                            </p>
                            <time className='reviews__time' dateTime='2019-04-24'>{reviewItem.date}</time>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                  <ReviewsForm/>
                </section>
              </div>
            </div>
            <section className='property__map map'></section>
          </section>
          <div className='container'>
            <section className='near-places places'>
              <h2 className='near-places__title'>Other places in the neighbourhood</h2>
              <div className='near-places__list places__list'>
                <article className='near-places__card place-card'>
                  <div className='near-places__image-wrapper place-card__image-wrapper'>
                    <a href='#todo'>
                      <img className='place-card__image' src='img/room.jpg' width='260' height='200' alt='Place img' />
                    </a>
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
                        <span style={{width: '80%'}}></span>
                        <span className='visually-hidden'>Rating</span>
                      </div>
                    </div>
                    <h2 className='place-card__name'>
                      <a href='#todo'>Wood and stone place</a>
                    </h2>
                    <p className='place-card__type'>Private room</p>
                  </div>
                </article>

                <article className='near-places__card place-card'>
                  <div className='near-places__image-wrapper place-card__image-wrapper'>
                    <a href='#todo'>
                      <img className='place-card__image' src='img/apartment-02.jpg' width='260' height='200' alt='Place img' />
                    </a>
                  </div>
                  <div className='place-card__info'>
                    <div className='place-card__price-wrapper'>
                      <div className='place-card__price'>
                        <b className='place-card__price-value'>&euro;132</b>
                        <span className='place-card__price-text'>&#47;&nbsp;night</span>
                      </div>
                    </div>
                    <div className='place-card__rating rating'>
                      <div className='place-card__stars rating__stars'>
                        <span style={{width: '80%'}}></span>
                        <span className='visually-hidden'>Rating</span>
                      </div>
                    </div>
                    <h2 className='place-card__name'>
                      <a href='#todo'>Canal View Prinsengracht</a>
                    </h2>
                    <p className='place-card__type'>Apartment</p>
                  </div>
                </article>

                <article className='near-places__card place-card'>
                  <div className='place-card__mark'>
                    <span>Premium</span>
                  </div>
                  <div className='near-places__image-wrapper place-card__image-wrapper'>
                    <a href='#todo'>
                      <img className='place-card__image' src='img/apartment-03.jpg' width='260' height='200' alt='Place img' />
                    </a>
                  </div>
                  <div className='place-card__info'>
                    <div className='place-card__price-wrapper'>
                      <div className='place-card__price'>
                        <b className='place-card__price-value'>&euro;180</b>
                        <span className='place-card__price-text'>&#47;&nbsp;night</span>
                      </div>
                    </div>
                    <div className='place-card__rating rating'>
                      <div className='place-card__stars rating__stars'>
                        <span style={{width: '100%'}}></span>
                        <span className='visually-hidden'>Rating</span>
                      </div>
                    </div>
                    <h2 className='place-card__name'>
                      <a href='#todo'>Nice, cozy, warm big bed apartment</a>
                    </h2>
                    <p className='place-card__type'>Apartment</p>
                  </div>
                </article>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}

export default PropertyScreen;
