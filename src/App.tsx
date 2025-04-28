import React from 'react';
import GlobalStyle from './styles/GlobalStyle';
import Header from './components/Header';
import RandomJokeCard from './components/RandomJokeCard';
import JokeSearch from './components/JokeSearch';
import About from './components/About';
import Footer from './components/Footer';

// Main App component - organizes and displays all page sections
function App() {
  return (
    <>
      {/* Apply global CSS styling to the entire app */}
      <GlobalStyle />
      <Header />
      <RandomJokeCard />
      <JokeSearch />
      <About />
      <Footer />
    </>
  );
}

export default App;