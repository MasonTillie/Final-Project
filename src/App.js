import Home from './views/Home';
import Navbar from './components/Navbar';
import PlayerInfo from './views/PlayerInfo';
import Login from './views/Login/Login';
import SignUp from './views/SignUp/SignUp';

import { Routes, Route, BrowserRouter } from 'react-router-dom';

import React, { Component } from 'react'

export default class App extends Component {

  render() {
    return (
      <BrowserRouter>
      <Navbar/>
        <div>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/playerinfo' element={<PlayerInfo />}></Route>
            <Route path='/signup' element={<SignUp />}></Route>
            <Route path='/login' element={<Login />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    )
  }
}