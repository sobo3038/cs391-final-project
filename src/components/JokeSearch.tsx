import React, { useState } from 'react';
import styled from 'styled-components';

const SearchContainer = styled.div`
 max-width: 600px;
 margin: 20px auto;
 padding: 20px;
 background: white;
 border-radius: 10px;
 box-shadow: 0 2px 5px rgba(0,0,0,0.1);
`;

const JokeSearch = () => {
 const [term, setTerm] = useState('');
 const [results, setResults] = useState<string[]>([]);

 const handleSearch = async () => {
   const res = await fetch(`https://icanhazdadjoke.com/search?term=${term}`, {
     headers: { Accept: 'application/json' },
   });
   const data = await res.json();
   setResults(data.results.map((j: any) => j.joke));
 };

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
