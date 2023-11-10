import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { add } from "./cartSlice"


const LatestCollections = () => {
  const [latest, setLatest] = useState([])
  const dispatch = useDispatch();
  useEffect(() => {
    const getLatest = async () => {
      const url = await axios.get("https://api.itbook.store/1.0/search/mongodb")
      setLatest(url.data.books)
    }
    getLatest()
  })

  const addbooks = (book) => {
    dispatch(add(book));
  }

  return (
    <div>
      <div className="container">
        <div className='col-12 mb-5'>
          <h1 className='display-5 fw-bolder text-center'>New Arrivals</h1>
          <hr></hr>
        </div>
        <div className="row ">
          {latest.map((book) => (
            <>
              <div className='col-xs-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 ' key={book.isbn13}>
                <Link to={`/book/${book.isbn13}`}>
                  <div className="text-center shadow" >
                    <img src={book.image} className="img-fluid w-100" alt={book.title} />
                  </div>
                </Link>
                <div className="text-center">
                  <div className="fs-6">{book.title.substring(0, 15)}...</div>
                  <div className="text-center">{book.price}</div>
                  <button className='btn btn-outline-dark' onClick={() => addbooks(book)}>Add to cart</button>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  )
}
export default LatestCollections