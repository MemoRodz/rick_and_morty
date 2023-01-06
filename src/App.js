import styles from './App.module.css';
import { useState } from 'react';
import Cards from './components/Cards.jsx';
import NavBar from './components/NavBar.jsx';
import Login from './components/Login.jsx';
import About from './components/About.jsx';
import Detail from './components/Detail';
import { Routes, Route } from 'react-router-dom';


function App() {

  const [characters, setCharacters] = useState([]);

  function onSearch(id) {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          if (characters.find((e) => e.id === data.id)) {
            alert('El personaje ya existe.')
          }
          else {
            setCharacters((oldChars) => [...oldChars, data]);
          }
        } else {
          window.alert('No hay personajes con ese ID');
        }
      });
  }

  function onClose(id) {
    setCharacters((data) => {
      return data.filter((e) => e.id !== id)
    })
  }

  return (
    <div className={styles.App} style={{ padding: '25px' }}>
      <div className={styles.container}>
        <NavBar
          onSearch={onSearch}
        />
      </div>
      <hr />
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/home" element={<Cards characters={characters} onClose={onClose} />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/detail/:detailId" element={<Detail />}></Route>
      </Routes>
    </div>
  )
}

export default App;


/*
"/home": esta será la ruta del Home (vista principal/general).
"/detail/:detailId": en esta ruta encontraremos información más detallada sobre el personaje en particular.
"/about": en esta ruta colocarás tu nombre y describirás de qué trata la aplicación Rick & Morty.
*/