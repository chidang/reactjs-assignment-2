import React from 'react';
import './CharComponent.css';

function CharComponent(props) {
  return (
    <p className="Char" onClick={props.click}>{props.text}</p>
  )
}

export default CharComponent;