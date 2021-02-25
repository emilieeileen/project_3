import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Paginate from './Paginate'

export default function UserBooking(props) {

  const userId = props.userId

  const [userBookings, updateUserBookings] = useState([])

  const [bookingsLoading, updateBookingsLoading] = useState(true)

  const resultsPerPage = 3
  const [pageNum, updatePageNum] = useState(1)

  useEffect(() => {
    try {
      axios.get('/api/properties')
        .then(({ data }) => {
          const allPropertiesData = data
          const filteredBookings = []
          allPropertiesData.forEach(property => { 
            property.bookings.forEach(booking => {
              if (booking.user._id === userId) {
                filteredBookings.push(booking)
              }
            })
          })
          updateUserBookings(filteredBookings)
          updateBookingsLoading(false)
        })
    } catch (err) {
      console.log('Error:', err)
    }
  }, [])

  if (bookingsLoading) {
    return <div className='loading'>
      <img src='https://i.ibb.co/xDS2vQc/loading.gif' />
    </div>
  }

  function handlePageChange(newValue) {
    updatePageNum(newValue)
  }

  return <div className="section">
    <div className='block mb-4'>
      <h2 className='title is-4 mb-4'>Your Bookings</h2>

      <Paginate
        onChange={handlePageChange}
        pageNum={pageNum}
        totalResults={userBookings.length}
        resultsPerPage={resultsPerPage}
      />
    </div>

    <div>

      {userBookings.slice((pageNum - 1) * resultsPerPage, ((pageNum - 1) * resultsPerPage) + resultsPerPage).map((item, index) => {

        return <div className='box columns mt-4' key={index}>
          <div className="column">
            <h4 className='title is-4 mb-2 mt-2'>{item.propertyName}</h4>
            <h5 className='title is-4 mb-2 mt-2'>Check In: {String(new Date(item.checkInDate)).substr(0,15)}</h5>
            <h5 className='title is-4 mb-2 mt-2'>Check Out: {String(new Date(item.checkOutDate)).substr(0,15)}</h5>
            <button className="button is-danger">Delete Booking</button>
          </div>

        </div>
      })}
    </div>

  </div>

}



