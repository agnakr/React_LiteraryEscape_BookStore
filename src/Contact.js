import React from 'react'
import { FaEnvelope, FaGlobe, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";


const Contact = () => {
  return (
    <div>
      <div className='container'>
        <div className='card border-0 shadow-lg'>
          <h1 className=' text-center fs-1 fw-bold pt-5'>Contact Us</h1>
          <div className='row pt-4'>
            <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 text-center'><img src="/Bgimages/contact.webp" className='w-100 h-100' /></div>
            <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 text-center'>
              <div className='text-center fs-3 '>
                <div className='pt-4 mt-5' > <FaPhoneAlt size={50} /></div>
                <div className='pt-2' ><p>+91 5475 7432 54</p></div>
              </div>
              <div className='text-center fs-3 '>
                <div className='pt-4 mt-4'> <FaEnvelope size={50} /></div>
                <div className='pt-2'><p>literaryescape@gmail.com</p></div>
              </div>
              <div className='text-center fs-3 '>
                <div className='pt-4 mt-4'> <FaGlobe size={50} /></div>
                <div className='pt-2'><p>www.Literary Escape.com</p></div>
              </div>
              <div className='text-center fs-3 '>
                <div className='pt-4 mt-4'> <FaMapMarkerAlt size={50} /></div>
                <div className='pt-2'><p> Literary Escape<br></br>6543 2nd Street<br></br>The Netherlands.NL</p></div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Contact