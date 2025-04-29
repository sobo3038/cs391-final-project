import React from 'react';
import GlobalStyle from './styles/GlobalStyle';
import Header from './components/Header';
import RandomJokeCard from './components/RandomJokeCard';
import JokeSearch from './components/JokeSearch';
import About from './components/About';
import Footer from './components/Footer';
import styled from 'styled-components';

const AppWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;


// Main App component - organizes and displays all page sections
function App() {
  return (
    <AppWrapper>
      {/* Apply global CSS styling to the entire app */}
      <GlobalStyle />
      <Header />
      <RandomJokeCard />
      <JokeSearch />
      <About />
      <Footer />
    </AppWrapper>
  );
}

export default App;