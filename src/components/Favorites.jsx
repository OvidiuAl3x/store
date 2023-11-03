import React from "react";

const Favorites = ({ favorite, setFavorite }) => {
  return (
    <div>
      {favorite.map((item) => (
        <p>{item.title}</p>
      ))}
    </div>
  );
};

export default Favorites;
