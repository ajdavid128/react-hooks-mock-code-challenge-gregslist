import {React, useEffect, useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [listingState, setListings] = useState([])

  useEffect(() => {
    fetch('http://localhost:6001/listings')
      .then((response) => response.json())
      .then((listingsData) => setListings(listingsData))
  }, [])

  return (
    <div className="app">
      <Header listingState={listingState} setListings={setListings}/>
      <ListingsContainer listingState={listingState} setListings={setListings}/>
    </div>
  );
}

export default App;
