import React from 'react'
import Home from './Home'
import About from './About'
import BookList from './BookList'
import Contact from "./Contact"
import { Router, Route } from 'react-router-dom'
import Gallery from './Gallery'


function Navbar() {
  return (
    <Router>
      <div>
        <Route path='/home'><Home /></Route>
        <Route path='/bookstore'><BookList /></Route>
        <Route path='/contact'><Contact /></Route>
        <Route path='/about'><About /></Route>
        <Route path='/gallery'><Gallery /></Route>
      </div>
    </Router>
  )
}

export default Navbar

