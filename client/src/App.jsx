import "./app.scss"
import Login from "./pages/login/Login";
import Regiser from "./pages/register/Regiser";
import Home from "./pages/home/Home";
import Watch from "./pages/watch/Watch";
//import { createRoot } from 'react-dom';


import {
  BrowserRouter as Router,
 // Switch,
  Routes,
  Route,
  //Redirect
 // Navigate,
 
} from "react-router-dom";
import Search from "./pages/search/Search";
//import { useContext } from "react";
//import { AuthContext } from "./authContext/AuthContext";


//Switch   => Routes
const App = () => {
// const { user } = useContext(AuthContext);
//const root = createRoot(document.getElementById('root'));


  return (
    <Router>
  
    <Routes>   

      <Route exact path="/" element = {<Home /> }></Route>   

      <Route path="/register" element = { <Regiser/>}></Route>   

      <Route path="/login" element = {<Login/> }></Route>
      

        <Route path="/movies" element = {<Home type="movie"/>}></Route>
                     
        <Route path="/series" element = {<Home type="series"/>}></Route>
  
        <Route path="/watch" element = {<Watch/>}></Route>
        
        
        <Route path="/search" element = {<Search/>}></Route>
           
        
    

      

    </Routes>

    </Router>
  );


};

export default App;