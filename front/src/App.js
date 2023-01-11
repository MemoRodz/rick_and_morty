import styles from './App.module.css';
import { useState, useEffect } from 'react';
import Cards from './components/Cards.jsx';
import NavBar from './components/NavBar.jsx';
import About from './components/About.jsx';
import Detail from './components/Detail';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Form from './components/Form.jsx';


function App() {
  
  const [access, setAccess] = useState(false);
  const username = "33b@soyHenry.com";
  const password = "@Model101";
  const navigate = useNavigate();

  function login(userData) {
    if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate("/home");
    } else {
      alert("Usuario y/o password incorrectos.")
    }
  }

  function logout() {
      setAccess(false);
      navigate("/home");

  }

  useEffect(() => {
    !access && navigate('/');
  }, [access]);

  const location = useLocation();
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
    <div className={styles.App}>
      <div className={styles.container}>
        <div>
          {location.pathname === "/" ? null : <NavBar logout={logout}
            onSearch={onSearch}
          />}
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Form login={login}/>}></Route>
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