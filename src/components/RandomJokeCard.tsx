//src/components/RandomJokeCard.ts

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// Styled wrapper to center
const Wrapper = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 width: 100%;
`;

// Styled card container for displaying the joke
const Card = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 20px;
  padding: 40px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  text-align: center;
`;

// Styled button for fetching a new joke
const Button = styled.button`
  margin: 10px;
  padding: 10px 15px;
  border: none;
  background-color: #ffcc00;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
`;

// RandomJokeCard component - fetches and displays a random dad joke
// Made by Sofia Boada
const RandomJokeCard = () => {
  // joke: stores the current joke text
  const [joke, setJoke] = useState('');

  // fetchJoke: fetches a new random joke from the icanhazdadjoke API
  const fetchJoke = async () => {
    const res = await fetch('https://icanhazdadjoke.com/', {headers: { Accept: 'application/json' }});
    const data = await res.json();
    setJoke(data.joke);
  };

  // useEffect: fetch a joke once when the component mounts
  useEffect(() => { fetchJoke(); }, []);

  return (
    <Wrapper>
      <Card>
        <p>{joke}</p>
        <Button onClick={fetchJoke}>Get Another Joke</Button>
      </Card>
    </Wrapper>
  );
};

export default RandomJokeCard;