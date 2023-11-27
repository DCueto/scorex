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
    </section>
  )
}

export default GameInfo;