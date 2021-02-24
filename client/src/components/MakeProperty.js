import React, { useState } from 'react'
import axios from 'axios'
import PropertyForm from './PropertyForm'
import { getLoggedInUserId } from '../lib/auth.js'


export default function MakeProperty({ history }) {
  const LoggedInUserId = getLoggedInUserId()
  const [error, updateError] = useState('')
  const [checkboxData, updateCheckboxData] = useState([
    {
      amenityName: 'Wifi',
      amenityValue: false
    },
    {
      amenityName: 'Pet friendly',
      amenityValue: false
    },
    {
      amenityName: 'Wheelchair Accessible',
      amenityValue: false
    },
    {
      amenityName: 'Washing machine',
      amenityValue: false
    },
    {
      amenityName: 'Near a beach',
      amenityValue: false
    }
  ])

  const [formData, updateFormData] = useState({
    images: [],
    name: '',
    location: '',
    isRoomOnly: false,
    isEntirePlace: false,
    pricePerNight: '',
    summary: '',
    numberOfBedrooms: '',
    maxNumberOfGuests: '',
    checkInTime: '',
    checkOutTime: '',
    houseRules: '',
    cancellationPolicy: '',
    amenities: checkboxData
  })


  function handleChange(event) {
    updateFormData({ ...formData, [event.target.name]: event.target.value })
  }

  function handleImages(imageArray) {
    updateFormData({ ...formData, images: imageArray })
  }

  function handleCheckBox(event) {
    const amenityIndex = checkboxData.findIndex(amenity => amenity.amenityName === event.target.name)
    const newCheckboxData = [...checkboxData]
    newCheckboxData[amenityIndex] = {
      'amenityName': event.target.name,
      'amenityValue': event.target.checked
    }
    updateCheckboxData(newCheckboxData)
    updateFormData({ ...formData, ['amenities']: newCheckboxData })
  }

  async function handleSubmit(event) {
    event.preventDefault()
    const token = localStorage.getItem('token')
    const newFormData = {
      images: formData['images'],
      name: formData['name'],
      location: formData['location'],
      isRoomOnly: true,
      isEntirePlace: true,
      pricePerNight: formData['pricePerNight'],
      summary: formData['summary'],
      numberOfBedrooms: formData['numberOfBedrooms'],
      maxNumberOfGuests: formData['maxNumberOfGuests'],
      checkInTime: formData['checkInTime'],
      checkOutTime: formData['checkOutTime'],
      houseRules: formData['houseRules'],
      cancellationPolicy: formData['cancellationPolicy'],
      amenities: formData['amenities'],
      host: LoggedInUserId
    }

    try {
      const { data } = await axios.post('/api/properties', newFormData, {
        headers: { Authorization: `Bearer ${token}` }
      })
      //console.log(data._id)
      history.push(`/properties/${data._id}`)
    } catch (err) {
      updateError('Unable to add property. Please enter a unique property name and a value for all required fields.')
      console.log(err)
    }
  }

  return <div className='container px-6 pt-6 pb-6'>
    <h5 className='title is-5 mt-4 mb-2'>List your property</h5>

    {error && <div className='box has-background-danger has-text-white'>{error}</div>}

    <PropertyForm
      handleChange={handleChange}
      handleTypeChange={(types) => updateFormData({ ...formData, types })}
      handleSubmit={handleSubmit}
      handleCheckBox={handleCheckBox}
      formData={formData}
      location='makeProperty'
    />
    {error && <div className='box mt-4 has-background-danger has-text-white'>{error}</div>}
  </div>

}