import React from 'react';
import GlobalStyle from './styles/GlobalStyle';
import Header from './components/Header';
import RandomJokeCard from './components/RandomJokeCard';
import JokeSearch from './components/JokeSearch';
import About from './components/About';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <RandomJokeCard />
      <JokeSearch />
      <About />
    </>
  );
}

export default App;