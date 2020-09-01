import React from 'react';

const Button = ({text, image, color, clickFunction}) => {

  return (
    <div
      className={`button button--${color}`}
      onClick={() => clickFunction()}
    >
      <img src={image} alt="" className="button__image"/>
      {text}
    </div>
  )

}

export default Button;