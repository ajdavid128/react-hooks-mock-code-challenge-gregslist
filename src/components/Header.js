import {React, useState} from "react";
import Search from "./Search";

function Header({listingState, setListings}) {

  const [searchQuery, setSearchQuery] = useState("")

    const itemsToDipsplay = listingState.filter((eachListing) => {
      return eachListing.description.toLowerCase().includes(searchQuery.toLowerCase())
    }) 

    function handleSubmit(e) {
      e.preventDefault();
      setListings(itemsToDipsplay);
      console.log("submitted");
    }


  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search handleSubmit={handleSubmit} setSearchQuery={setSearchQuery} searchQuery={searchQuery}/>
    </header>
  );
}

export default Header;
