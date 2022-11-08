import { React, useState } from 'react'
import ListingCard from './ListingCard'

function ListingsContainer({listingState, setListings}) {
  
  // const [deletedState, setDeletedState] = useState()

  const handleDelete = (e) => {
    fetch(`http://localhost:6001/listings/${e.target.id}`, { method: 'DELETE' })
    .then(setListings(listingState)) //setListings to a [...listingState, ~~~]
    // console.log(e.target.id)
  }


  
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
