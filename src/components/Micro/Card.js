import React from 'react';

const Card = ({anime, i, active, size, clickFunction}) => {
  return (
    <div
      className={`card ${active ? 'card--active' : ''} ${size}`}
      style={{backgroundImage: `url(${anime.attributes.posterImage.small})`}}
      onClick={() => clickFunction(i)}
    >
    </div>
  )
}

export default Card;