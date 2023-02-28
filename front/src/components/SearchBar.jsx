import styles from './SearchBar.module.css';
import React, { useState } from 'react';

export default function SearchBar(props) {
  const [character, setCharacter] = useState("");

  function handleInput(event) {
    console.log("tecla presionada", event.target.value)
    if(parseInt(event.target.value, 10)){
      console.log("tecla presionada dentro", event.target.value)
      setCharacter(event.target.value);
    }
  }

  function handleKeyDown(event) {
    if(event.key === 'Enter'){
      onSearchOptimus();
    } else if(isNaN(event.key)) {
      return false;
    }
  }

  function onSearchOptimus() {
    props.onSearch(character)
    setCharacter("")
  }
  return (
    <div className={styles.search}>
      <input
        type='text'
        name='search'
        placeholder='Escribe el ID del personaje.'
        onChange={(e) => handleInput(e)}
        onKeyDown={(e) => handleKeyDown(e)}
        value={character}
      />
      <button onClick={onSearchOptimus}>Add</button>
    </div>
  );
}
