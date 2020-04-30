import React from 'react';
import './ValidationComponent.css';

function ValidationComponent(props) {
  let message = '';
  let className='error';

  if(props.textLength < 5){
    message = 'Text to short';
  }else{
    message = 'Text long enough';
    className = 'valid';
  }

  return(
    <p className={className}>{message}</p>
  )
}

export default ValidationComponent;