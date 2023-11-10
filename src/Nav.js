import React from 'react'
import "./App.css"
import { Link } from "react-router-dom"
import { useSelector } from 'react-redux'
import { FaYoutubeSquare, FaOpencart, FaShoppingCart } from 'react-icons/fa';
const Nav = () => {
  const items = useSelector((state) => state.cart)
  return (
    <>
      <nav className="navbar sticky-top bg-light navbar-expand-lg bg-body-white  w-100 ">
        <div className="container w-100 ">
          <Link className="navbar-brand fw-bold fs-1" href="/"><i><img src="/Bgimages/logo.png" alt="logo" width={70} height={50} />  Literary Escape</i></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/booklist">Books</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/gallery">Book Gallery</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cart">Cart            <FaShoppingCart /> {items.length}</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </>

  )
}

export default Nav
