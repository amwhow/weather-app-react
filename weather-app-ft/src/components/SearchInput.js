import React, { useState } from "react";

function SearchInput( { setuserInput }) {
  const [location, setLocation] = useState("");


  function onFormSubmit(e) {
    e.preventDefault();
    setuserInput(location)
  }

  return (
    <form onSubmit={onFormSubmit}>
      <label htmlFor="location">Location</label>
      <input type="text" name="location" id="location" placeholder="Melbourne" onChange={(e) => setLocation(e.target.value)}></input>
      <input type="submit"></input>
    </form>
  );
}

export default SearchInput;
