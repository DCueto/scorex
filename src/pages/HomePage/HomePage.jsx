import './HomePage.css';

import Carrousel from "../../components/Carrousel/Carrousel";
import SearchResults from '../../components/Search/SearchResults';
import RAWGService from '../../services/RAWGService';

import { useEffect, useState } from 'react';
import SliderGames from '../../components/Slider/SliderGames';

function HomePage({inputValue, isSearching}){
  const [searchResults, setSearchResults] = useState([]);
  const [slides, setSlides] = useState([324997,388309,58751,962985,415171,840768,45821]);
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
          <SliderGames slides={slides} />
          <Carrousel endpoint="https://api.rawg.io/api/games?metacritic=50,100&ordering=-released" title="Latests Games" />
          <Carrousel endpoint="https://api.rawg.io/api/games?metacritic=96,100&ordering=-metacritic" title="Best Games by Metacrític" />
        </>
      }
    </>
  )
}


export default HomePage;