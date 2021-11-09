import React  from 'react';
import RactDOM from "react-dom";
const { useState } = React;

function Search(){

  const [searching ,setsearching]=useState(false);
  const [message, setMessage] = useState(null);
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const Search=async(e) =>{
     e.preventDefault();
     setsearching(true);
     const url =`http://www.omdbapi.com/?&apikey=e1a73560&s=${query}&type="movie"`;
         try{
            const response = await fetch(url);
            const data = await response.json();
            setMessage(null);
            setMovies(data);
            setsearching(false);
      
     }catch(err){
      setMessage('An unexpected error occured.')
      setsearching(false);
     }
  }

    return (
      <div>
    <div>
    <form onSubmit={Search}>
      <input  type="text" name="query" placeholder="search movie"
      value={query} onChange={(e) =>setQuery(e.target.value)}
      />

      <button type="submit" class="ml-1 outline-none focus:outline-none active:outline-none">
         <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-6 h-6">
        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
      </button>
     
    </form>
    </div>
    <div class="container mx-auto">{searching && !message ? ( <span> loading... </span>): message ? ( <div className = "message"> {message} </div>): (movies.map(movie => ( 
        <div class="inline-block px-2 w-64 h-64">
             <div class="bg-white rounded-lg overflow-hidden shadow-xl my-8 py-4"key={movie.imdbID}>
              <img src={movie.Poster} alt="movieimage" class="w-full h-64"/>
              <div class="p-4">
                  <p class="font-medium text-lg">Title: <span class="font-normal text-base leadin-relaxed">{movie.Title}</span></p>
                   <p class="font-medium text-lg">Year of Release: <span class="font-normal text-base">{movie.Year}</span></p></div>
                    </div>
                  </div> 
                )))}
            </div>
      </div>
    )
};

export default Search;