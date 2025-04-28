import React, { useState } from 'react';
import styled from 'styled-components';

// Styled container for the search section
const SearchContainer = styled.div`
 max-width: 600px;
 margin: 20px auto;
 padding: 20px;
 background: white;
 border-radius: 10px;
 box-shadow: 0 2px 5px rgba(0,0,0,0.1);
`;

// JokeSearch component - allows user to search for jokes based on a keyword
// Made by Francisco Jose Miguel
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
   <SearchContainer>
     <h3>Search for a Joke</h3>
     <input value={term} 
     onChange={(e) => setTerm(e.target.value)} />
     <button onClick={handleSearch}> Search </button>
     <ul>
       {results.map((joke, i) => <li key={i}>{joke}</li>)}
     </ul>
   </SearchContainer>
 );
};

export default JokeSearch;
