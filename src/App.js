
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React,{useState} from "react";
import Footer from './Footer';
import Header from './Header';
import Login from './Component/Login.js'
import Register from './Component/Register.js'
import Home from "./Component/Home"
function App() {
  let [name, setName] = useState("");
  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/"> <Home></Home></Route>
          <Route  path="/login"> <Login></Login></Route>
          <Route  path="/register"> <Register></Register></Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
