import React, {useEffect, useState} from 'react';
import * as actions from '../actions';

const Category = ({category}) => {
  
  const [page, setPage] = useState(0);
  const [animes, setAnimes] = useState([]);

  useEffect(() => {
    actions.fetchCategory(category, 0)
      .then(result => {
        if (result.success) {
          setAnimes(result.data);
        }
      });
  }, []);

  return (
    <div>
      {
        animes.map(anime => (
          <div>
            {anime.attributes.canonicalTitle}
          </div>
        ))
      }
    </div>
  );
}

export default Category;