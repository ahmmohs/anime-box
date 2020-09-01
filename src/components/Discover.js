import React, {useEffect, useState} from 'react';

import * as actions from '../actions';
import { useSelector, useDispatch } from 'react-redux';

import '../styles/discover.css'

import Card from './Micro/Card';
import Button from './Micro/Button';

const Discover = () => {

  /* Selected anime */
  const [selected, setSelected] = useState(0);
  /* All anime within category */
  const [animes, setAnimes] = useState([]);
  /* Get watchlist */
  const watchList = useSelector(state => state.ids);
  const watchDispatch = useDispatch();

  useEffect(() => {

    /* Only fetch trending animes on mount */
    if (animes.length === 0) {
      actions.fetchTrending()
        .then(result => {
          if (result.success) {
            setAnimes(result.data);
          }
        });
    }
    
    /* Interval to cycle through animes */
    const interval = setInterval(() => {
      if (selected <= 8) {
        setSelected(selected + 1);
      } else {
        setSelected(0);
      }
    }, 5000);
    
    /* Clear timeout when component unmounts */
    return () => clearInterval(interval);
  }, [selected, animes.length]);
 
  return (
    <div className="discover__wrapper">
      {
        animes.length > 0 ? (
          <div className="discover__header" style={{backgroundImage: `url(${animes[selected].attributes.coverImage.large})`}}>
            <div className="discover__options">
              <div className="discover__text">
                <div className="discover__title">{animes[selected].attributes.canonicalTitle}</div>
                <div className="discover__description">{animes[selected].attributes.description}</div>
                <div className="discover__buttons">
                  <Button
                    text="Start Watching"
                    clickFunction={() => {}}
                    color="blue"
                  />
                  <Button
                    text={watchList.includes(animes[selected].id) ? 'Remove from Watch Later' : 'Add to Watch Later'}
                    clickFunction={() => {
                      watchDispatch({
                        type: 'UPDATE',
                        payload: {id: animes[selected].id, anime: animes[selected]}
                      });
                    }}
                    color="neutral"
                  />
                </div>
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