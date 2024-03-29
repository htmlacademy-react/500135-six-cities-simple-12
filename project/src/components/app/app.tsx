import { AppRoute } from '../../const';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import LoginScreen from '../../pages/login-screen/login-screen';
import MainScreen from '../../pages/main-screen/main-screen';
import PropertyScreen from '../../pages/property-screen/property-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import { TypeOffers } from '../../types/offer';

type AppProps = {
  sum: number;
  offers: TypeOffers;
};

function App({ sum, offers }: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root} element={<MainScreen sum={sum} offers={offers}/>} />
        <Route path={AppRoute.Login} element={<LoginScreen />} />
        <Route path={AppRoute.Room} element={<PropertyScreen offers={offers}/>} />
        <Route path='*' element={<NotFoundScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
