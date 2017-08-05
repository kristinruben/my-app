import React, { Component } from 'react';
import './Card.css'

const Card = props => {
  let link = `/cards/${props.id}`

  return (
    <a href={link}>
      <div className="callout small">
        <p className="main-text-color">{props.title}</p>
      </div>
    </a>
  );
};

export default Card;
