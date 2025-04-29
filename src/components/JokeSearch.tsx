import React, { useState } from 'react';
import styled from 'styled-components';

// Styled wrapper to center
const SearchWrapper = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 width: 100%;
`;

// Styled container for the search section
const SearchContainer = styled.div`
 width: 100%;
 max-width: 600px;
 margin: 20px;
 padding: 40px;
 background: white;
 border-radius: 10px;
 box-shadow: 0 2px 5px rgba(0,0,0,0.1);
 justify-items: center;
`;

// Styled input to match the website
const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-right: 10px;
  width: 60%;
  max-width: 300px;
`;

// Styled button to match the random joke button
const Button = styled.button`
  margin: 10px;
  padding: 10px 15px;
  border: none;
  background-color: #ffcc00;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #e6b800;
  }
`;


// JokeSearch component - allows user to search for jokes based on a keyword
// Made by Francisco Jose Moguel
const JokeSearch = () => {
  // term: stores the current search input from the user
 const [term, setTerm] = useState('');
 // results: stores an array of jokes returned by the API
 const [results, setResults] = useState<string[]>([]);

 // handleSearch: function to fetch jokes based on the search term
 const handleSearch = async () => {
   const res = await fetch(`https://icanhazdadjoke.com/search?term=${term}`, {
     headers: { Accept: 'application/json' },
   });
   const data = await res.json();
   // Update results with the array of jokes received
   setResults(data.results.map((j: any) => j.joke));
 };

 // Render the search input, button, and a list of jokes
 return (
  <SearchWrapper>
   <SearchContainer>
     <h3>Search for a Joke</h3>
     <Input value={term} 
     onChange={(e) => setTerm(e.target.value)} />
     <Button onClick={handleSearch}> Search </Button>
     <ul>
       {results.map((joke, i) => <li key={i}>{joke}</li>)}
     </ul>
   </SearchContainer>
  </SearchWrapper>
 );
};

export default JokeSearch;
