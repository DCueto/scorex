import { useEffect, useState } from 'react';
import './GameInfo.css';

const GameInfo = ({data}) => {
  const [platforms, setPlatforms] = useState([]);

  useEffect( () => {
    setPlatforms(data.platforms);
  }, [] )

  return(
    <section className='gameInfo'>
      <article className='gameInfoItem gameInfoPlatforms'>
        <h6>Platforms</h6>
        <div className='gameInfoPlatformsTags'>
          {data.platforms?.map( (item) => (
            <span key={item.platform.id}>{item.platform.name}</span>
            )
          )}
        </div>
      </article>
      <article className='gameInfoItem gameInfoDateRelease'>
        <h6>Released</h6>
        <span>{data.released}</span>
      </article>
      <article className='gameInfoItem gameInfoScore'>
        <div className='gameInfoScoreMetacritic'>
          <h6>Metacritic</h6>
          <span>{data.metacritic}</span>
        </div>
        <div className='gameInfoScoreRating'>
          <h6>Rating</h6>
          <span>{data.rating}</span>
        </div>
      </article>
      <article className='gameInfoItem gameInfoGenres'>
        <h6>Genres</h6>
        <div className='gameInfoGenresTags'>
          {data.genres?.map( (item) => (
            <span className='genreTag' key={item.id}>{item.name}</span>
            )
          )}
        </div>
      </article>
    </section>
  )
}

export default GameInfo;