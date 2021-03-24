import Properties from '../../models/properties.js'
import User from '../../models/users.js'

export default async function setup(done) {
  const users = await User.create([
    {
      first_name: 'Cal',
      last_name: 'Richards',
      email: 'cal@cal.com',
      password: 'passwords',
      passwordConfirmation: 'passwords',
      isHost: true,
      isAdmin: false 
    },
    {
      first_name: 'Bojana',
      last_name: 'Sarenac',
      email: 'bojana@bojana.com',
      password: 'passwords1',
      passwordConfirmation: 'passwords1',
      isHost: false,
      isAdmin: false 
    },
    {
      first_name: 'India',
      last_name: 'Kalff',
      email: 'india@india.com',
      password: 'passwords3',
      passwordConfirmation: 'passwords3',
      isHost: true,
      isAdmin: false
    },
    {
      first_name: 'Emily',
      last_name: 'Kulesa',
      email: 'emily@emily.com',
      password: 'passwords4',
      passwordConfirmation: 'passwords4',
      isHost: false,
      isAdmin: false
    }
  ])

  await Properties.create([
    {
      name: 'Lovely seaside cottage',
      location: 'Suffolk',
      images: [
        'https://i.imgur.com/2XrkGA7.jpg',
        'http://placehold.it/400x400',
        'http://placehold.it/400x400'
      ],
      isRoomOnly: false,
      isEntirePlace: true,
      pricePerNight: 100,
      summary: 'A spacious cottage with gorgeous seaside views, extremely cosy and family-friendly',
      houseRules: 'Strictly no smoking and no overnight guests',
      cancellationPolicy: '100% deposit refund up until 48 hours before check-in time',
      numberOfBedrooms: 2,
      maxNumberOfGuests: 4,
      checkInTime: '15:00',
      checkOutTime: '12:00',
      amenities: [
        {
          amenityName: 'Wifi',
          amenityValue: true
        },
        {
          amenityName: 'Pet friendly',
          amenityValue: false
        },
        {
          amenityName: 'Wheelchair Accessible',
          amenityValue: true
        },
        {
          amenityName: 'Washing machine',
          amenityValue: false
        },
        {
          amenityName: 'Near a beach',
          amenityValue: false
        }
      ],
      host: users[0],
      comments: [],
      bookings: []
    },


    {
      name: 'Luxury room in Bath',
      location: 'Bath',
      images: ['https://i.imgur.com/dHjBMUV.jpg'],
      isRoomOnly: true,
      isEntirePlace: false,
      pricePerNight: 80,
      summary: 'A luxurious room with ensuite bathroom, in the heart of Bath',
      numberOfBedrooms: 1,
      maxNumberOfGuests: 2,
      checkInTime: '15:00',
      checkOutTime: '10:00',
      houseRules: 'Strictly no smoking and no overnight guests',
      cancellationPolicy: '100% deposit refund up until 48 hours before check-in time',
      amenities: [
        {
          amenityName: 'Wifi',
          amenityValue: true
        },
        {
          amenityName: 'Pet friendly',
          amenityValue: false
        },
        {
          amenityName: 'Wheelchair Accessible',
          amenityValue: true
        },
        {
          amenityName: 'Washing machine',
          amenityValue: true
        },
        {
          amenityName: 'Near a beach',
          amenityValue: true
        }
      ],
      host: users[0],
      comments: [],
      bookings: []
    },

    {
      name: 'Charming London Flat',
      location: 'Notting Hill',
      images: ['https://www.londonperfect.com/blog/wp-content/uploads/2019/03/Notting-Hills-Most-Colorful-Streets-by-London-Perfect.jpg'],
      isRoomOnly: false,
      isEntirePlace: true,
      pricePerNight: 160,
      summary: 'Charming Victorian flat on a quiet mews street only steps away from Notting Hill High Street',
      numberOfBedrooms: 2,
      maxNumberOfGuests: 4,
      checkInTime: '16:00',
      checkOutTime: '11:00',
      houseRules: 'Strictly no smoking and no overnight guests. No parties.',
      cancellationPolicy: '100% deposit refund up until 48 hours before check-in time',
      amenities: [
        {
          amenityName: 'Wifi',
          amenityValue: false
        },
        {
          amenityName: 'Pet friendly',
          amenityValue: true
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
          amenityValue: true
        }
      ],
      host: users[3],
      comments: [],
      bookings: []
    },

    {
      name: 'Double Room in New Town, Edinburgh',
      location: 'Edinburgh',
      images: ['https://i.imgur.com/7h24bWB.jpeg'],
      isRoomOnly: true,
      isEntirePlace: false,
      pricePerNight: 75,
      summary: 'Perfect for the Fringe, this double bed has easy access to all the historic sites of Edinburgh',
      numberOfBedrooms: 2,
      maxNumberOfGuests: 3,
      checkInTime: '16:30',
      checkOutTime: '11:00',
      houseRules: 'Strictly no smoking. Please be mindful of noise if returning after 10pm.',
      cancellationPolicy: '100% deposit refund up until 48 hours before check-in time',
      amenities: [
        {
          amenityName: 'Wifi',
          amenityValue: false
          
        },
        {
          amenityName: 'Pet friendly',
          amenityValue: true
        },
        {
          amenityName: 'Wheelchair Accessible',
          amenityValue: false
        },
        {
          amenityName: 'Washing machine',
          amenityValue: true
        },
        {
          amenityName: 'Near a beach',
          amenityValue: false
        }
      ],
      host: users[3],
      comments: [],
      bookings: []
    }
  ])

  done()

}
