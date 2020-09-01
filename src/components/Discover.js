import React, {useEffect, useState} from 'react';
import * as actions from '../actions';

import '../styles/discover.css'
import Card from './Micro/Card';

const Discover = () => {

  /* Selected anime */
  const [selected, setSelected] = useState(0);
  /* All anime within category */
  const [animes, setAnimes] = useState([]);

  useEffect(() => {
    actions.fetchTrending()
      .then(result => {
        if (result.success) {
          setAnimes(result.data);
        }
      });
  }, []);
 
  return (
    <div className="discover__wrapper">
      {
        animes.length > 0 ? (
          <div className="discover__header" style={{backgroundImage: `url(${animes[selected].attributes.coverImage.large})`}}>
            <div className="discover__options">
              <div className="discover__text">
                <div className="discover__title">{animes[selected].attributes.canonicalTitle}</div>
                <div className="discover__description">{animes[selected].attributes.description}</div>
              </div>
              <div className="anime__row">
                {animes.map((anime, i) => (
                  <Card
                    key={i}
                    anime={anime}
                    i={i}
                    size="med"
                    active={selected === i ? true : false}
                    clickFunction={setSelected}
                  />
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div>
            Loading
          </div>
        )
      }
    </div>
  )
}

export default Discover;