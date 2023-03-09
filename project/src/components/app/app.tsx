import React from 'react';
import MainScreen from '../../pages/main-screen/main-screen';

type AppProps = {
  sum: number;
};

function App({ sum }: AppProps): JSX.Element {
  return <MainScreen sum = {sum}/>;
}

export default App;
