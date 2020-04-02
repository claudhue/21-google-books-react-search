import React from "react";
import SearchBtn from "../SearchBtn";

function BookSearch() {
  return (
  <div>
  <h6>Book Search</h6>
  <label className="book">Book</label>
  <input type="text" className="form-control" id="book" placeholder = "Search"/>
  <SearchBtn/>
  </div>
);
}

export default BookSearch;