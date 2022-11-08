import { React, useState } from "react";

function ListingCard( { description, image, location, handleDelete, id } ) {

  const [ favoriteState, setFavoriteState ] = useState(false)

  const handleClick = () => {
    setFavoriteState(!favoriteState)
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {favoriteState ? (
          <button onClick={handleClick} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleClick} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button id={id} onClick={handleDelete} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
