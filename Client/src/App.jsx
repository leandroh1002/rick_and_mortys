import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import Detail from "./components/Views/Detail";
import { useState, useEffect } from "react";
import axios from "axios";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Forms from "./components/Form/Forms";
import PATHROUTES from "./helpers/PathRoutes.helper";
import Favorites from "./components/Favorites/Favorites";


function App() {
  
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  // const EMAIL = 'leandro@hotmail.com';
  // const PASSWORD = 'asd';
  
  // function login(userData) {
  //   if (userData.password === PASSWORD && userData.email === EMAIL) {
  //     setAccess(true);
  //     navigate('/home');
  //   }
  // }
/*
  function login(userData) {
    const { email, password } = userData;
    const URL = 'http://localhost:3001/rickandmorty/login/';
    axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
       const { access } = data;
       setAccess(data);
       access && navigate('/home');
    });
 }*/

 async function login(userData) {
   try {
     const { email, password } = userData;
     const URL = 'http://localhost:3001/rickandmorty/login/';
    const {data} =await axios(URL + `?email=${email}&password=${password}`)
    const {access} = data;

    setAccess(data);
       access && navigate('/home');
  } catch (error) {
    window.alert('¡Datos incorrectos!');
  }
 }

  
  useEffect(() => {
    !access && navigate('/');
 }, [access]);

const location = useLocation();
const [characters, setCharacters] = useState([]);

/*const onSearch = (id) => {
   axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
      if (data.name) {
         setCharacters((oldChars) => [...oldChars, data]);
      } else {
         window.alert('¡No hay personajes con este ID!');
      }
   });
} */


const onSearch = async (id) => {
   try {
    const url = `http://localhost:3001/rickandmorty/character/${id}`;

    const {data} = await axios(url)
    
      if (data.name) {
         setCharacters((oldChars) => [...oldChars, data]);
      }       
    } catch (error) {
      window.alert('¡No hay personajes con este ID!');
   }
}
 

const onClose =(id) =>{
  setCharacters(
    characters.filter((char) =>{
      return char.id !== (id)
    })
  )
}

  return (
    <div className="App">
      {location.pathname !== "/" && <Nav onSearch={onSearch} /> }
      <Routes>
        <Route path={PATHROUTES.LOGIN} element={<Forms login={login} />}/>
        <Route path={PATHROUTES.HOME} element={<Cards characters={characters} onClose={onClose}/>}></Route>
        <Route path={PATHROUTES.ABOUT} element={<About />}></Route>
        <Route path={PATHROUTES.DETAIL} element={<Detail />}></Route>
        <Route path={PATHROUTES.FAVORITES} element={<Favorites />}></Route>
      </Routes>
    </div>
  );
}

export default App;