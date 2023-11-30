import './SearchResults.css';
import { useState } from 'react';
import SearchCard from "./SearchCard"

function SearchResults({results}){
  
  return <section className="searchResults">
    <h2>Results:</h2>
    <hr/>
    <div className='searchResultsContainer'>
      {
        results.map( item => <SearchCard key={item.id} id={item.id} title={item.name} src={item.background_image} metascore={item.metacritic} date={item.released} /> )
      }
    </div>
  </section>
}

export default SearchResults;