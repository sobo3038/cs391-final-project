//src/components/RandomJokeCard.ts

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// Styled card container for displaying the joke
const Card = styled.div`
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  text-align: center;
`;

// Styled button for fetching a new joke
const Button = styled.button`
  margin-top: 10px;
  padding: 10px 15px;
  border: none;
  background-color: #ffcc00;
  border-radius: 5px;
  cursor: pointer;
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
    <Card>
      <p>{joke}</p>
      <Button onClick={fetchJoke}>Get Another Joke</Button>
    </Card>
  );
};

export default RandomJokeCard;