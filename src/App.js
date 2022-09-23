
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React, { useState } from "react";
import Footer from './Footer';
import Header from './Header';
import Login from './Component/Login.js';
import UserInfo from './Component/userInfo.js';
import Register from './Component/Register.js';
import Home from "./Component/Home"
function App() {
  const [name, setName] = useState(sessionStorage.getItem('name') ? sessionStorage.getItem('name') : "");
  return (
    <>
      <BrowserRouter>
        <Header name={name} setName={(data) => setName(data)}></Header>
        <Switch>
          <Route exact path="/"> <Home></Home></Route>
          <Route path="/login"> <Login></Login></Route>
          <Route path="/userInfo"> <UserInfo setName={(data) => setName(data)}></UserInfo></Route>
          <Route path="/register"> <Register></Register></Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
