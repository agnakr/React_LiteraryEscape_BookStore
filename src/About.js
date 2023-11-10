import React from 'react'
import "./Style.css"

const About = () => {
  return (
    <div className='pt-5 mt-5'>
      <div className='container shadow'>
        <div className="card  border-0 w-100">
          <div className='row'>
            <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6'><img src="/Bgimages/aboutusimg.png" className="img w-100 h-100" alt="about-image" /></div>
            <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 '><div className='card-title text-sm-center text-lg-center text-md-center text-xl-center ' id="about-h1-div" ><h1 id="about-h1" className='font-monospace fs-1'>About Us</h1></div>
              <div className='card-subtitle text-sm-justify text-lg-justify text-md-justify text-xl-justify ' id="about-h5-div"><h5 className="text-justify fw-lighter" id="about-h5">The Internet's Largest Bookstore . Since 2005,We have some expertise in books implied for offspring of various ages.
                The  books offered by us computer science books. Every one of these books is accessible in  English.
                Our books do not simply go for building up the scholarly capacities of youngsters; rather, they are made with the aim of contributing towards their all-encompassing improvement.
                As the ultimate destination for book lovers, Book Store offers an incredible array of content.Taking advantage of vast warehouses across the United States, we stock over 1 million titles for immediate delivery -- that's more titles than any other online bookseller.</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


  )
}

export default About
