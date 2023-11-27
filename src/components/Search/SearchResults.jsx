import './SearchResults.css';
import SearchCard from "./SearchCard"

function SearchResults({results}){
  
  return <section className="searchResults">
    <h2>Results:</h2>
    <div className='searchResultsContainer'>
      {
        results.map( item => <SearchCard key={item.id} title={item.name} src={item.background_image} metascore={item.metacritic} date={item.released} /> )
      
      }
    </div>
  </section>
}

export default SearchResults;