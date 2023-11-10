import React from 'react'
import "./Style.css"
import About from './About'
import LatestCollections from './LatestCollections'
import Gallery from './Gallery'

const Home = () => {
  return (
    <>
      <div>
        <div>
          <br></br>
          <br></br>
        </div>
        <div className='col text-center  font-monospace'>
          <h3>
            <b>FIND YOUR PLACE AT  ONLINE BOOKS STORE</b></h3>
        </div>
      </div>
      <div className='container pt-5 col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 w-100' id='home-container' >
        <div className="card w-100 border-0 shadow-lg ">
          <div className="card-body g-3 text-center pt-5 w-100">
            <h2 className="card-title w-100 h-100  fw-bolder p-1 px-5 text-dark " id="title">Literary Escape</h2>
            <p className="card-text w-100 h-100  fw-bold  px-5 text-dark" id="tag-line">Over 5 million books ready to ship.<br></br> Curbside pickup available in most stores!</p>
            <video src="/Bgimages/video.mp4" class="object-fit-cover" className='embed-responsive object-fit-cover w-50' controls autoplay-true muted loop></video>
          </div>
        </div>
        <br></br>
        <Gallery />
        <br></br>
        <LatestCollections />
        <About />
      </div>
    </>
  )
}

export default Home
