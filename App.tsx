/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { MainNavigation } from './src/navigation/routes';
import { Header } from './src/components/header/Header';





function App(): JSX.Element {




  return (
    <>
      <Header />
      <MainNavigation />
    </>
  );
}


export default App;
