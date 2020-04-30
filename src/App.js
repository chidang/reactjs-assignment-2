import React, {useState} from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

function App() {
  const [textState, setTextState] = useState({ text: '' })

  const changeTextHandler = (event) => {
    setTextState({ text: event.target.value });
  }

  const removeCharHandler = (index) => {
    const textArray = textState.text.split('');
    textArray.splice(index, 1);
    setTextState({ text: textArray.join('')})
  }

  let chars = null;

  if(textState.text.length > 0){
    chars = (
      <div>
        <ValidationComponent textLength={textState.text.length}></ValidationComponent>
        { 
          
          textState.text.split('').map((char, index) => {
            return <CharComponent
              text={char}
              key={index}
              click={() => removeCharHandler(index)}
            />
          })
        }
      </div>
    )
  }

  const style = {
    border: '1px solid blue',
    padding: '5px',
    height: '25px',
    width: '200px'
  }

  return (
    <div className="App">
      <input style={style} onChange={changeTextHandler} value={textState.text} type='text'/>
      {chars}
    </div>
  );
}

export default App;
