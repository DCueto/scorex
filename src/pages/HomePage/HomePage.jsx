import './HomePage.css';

import Carrousel from "../../components/Carrousel/Carrousel";
import SearchResults from '../../components/Search/SearchResults';
import RAWGService from '../../services/RAWGService';

import { useEffect, useState } from 'react';

function HomePage({inputValue, isSearching}){
  const [searchResults, setSearchResults] = useState([]);
  const rawg = new RAWGService();

  useEffect(() => {
    if(isSearching){
      rawg.customSearch(inputValue).then( fetchData => {
        setSearchResults(fetchData.results);
        console.log(fetchData);
      });
    }
  }, [isSearching, inputValue]);

  return (
    <>
      { isSearching
        ? <SearchResults results={searchResults} />
        :
        <>
          <Carrousel />
        </>
      }
    </>
  )
}


export default HomePage;