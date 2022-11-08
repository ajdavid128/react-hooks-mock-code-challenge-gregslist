import { React, useEffect, useState } from 'react'
import ListingCard from './ListingCard'

function ListingsContainer() {
  const [listingState, setListings] = useState([])

  const handleDelete = (id) => {
    // fetch(`http://localhost:6001/listings/${id}`, { method: 'DELETE' })
    // .then(response => response.json())
    console.log(id)
  }


  useEffect(() => {
    fetch('http://localhost:6001/listings')
      .then((response) => response.json())
      .then((listingsData) => setListings(listingsData))
  }, [])
  
  const listingsArray = listingState.map((listing) => (
    <ListingCard
      key={listing.id}
      description={listing.description}
      image={listing.image}
      location={listing.location}
      id={listing.id}
      handleDelete={handleDelete}
    />
  ))

  return (
    <main>
      <ul className='cards'>
        {listingsArray}
      </ul>
    </main>
  )
}

export default ListingsContainer
