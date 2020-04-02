// import React, { useState, useEffect } from "react";
// import API from "../utils/API";
import React from "react";
import ViewBtn from "../components/ViewBtn";
import SaveBtn from "../components/SaveBtn";
import BookSearch from "../components/BookSearch";

function Search() {
  // // Setting our component's initial state
  // const [books, setBooks] = useState([])
  // const [formObject, setFormObject] = useState({})

  // Load all books and store them with setBooks
  // useEffect(() => {
  //   loadBooks()
  // }, [])

  // Loads all books and sets them to books
  // function loadBooks() {
  //   API.getBooks()
  //     .then(res => 
  //       setBooks(res.data)
  //     )
  //     .catch(err => console.log(err));
  // };

  // Deletes a book from the database with a given id, then reloads books from the db
  // function deleteBook(id) {
  //   API.deleteBook(id)
  //     .then(res => loadBooks())
  //     .catch(err => console.log(err));
  // }

  // Handles updating component state when the user types into the input field
  // function handleInputChange(event) {
  //   const { name, value } = event.target;
  //   setFormObject({...formObject, [name]: value})
  // };

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  // function handleFormSubmit(event) {
  //   event.preventDefault();
  //   if (formObject.title && formObject.author) {
  //     API.saveBook({
  //       title: formObject.title,
  //       author: formObject.author,
  //       synopsis: formObject.synopsis
  //     })
  //       .then(res => loadBooks())
  //       .catch(err => console.log(err));
  //   }
  // };

    return (
      <div className = "results">
        <BookSearch/>
        <br/>
        <br/>
          <div className="card mb-3">
          <div className= "ml-auto" style={{display:"flex", float:"right"}}>
            <ViewBtn/>
            <SaveBtn/>
            </div>
            <div>
            <p>Book Title<br/>
            Author</p>
            </div>
            <div className="row no-gutters">
              <div className="col-md-2">
                <img src="https://via.placeholder.com/150" className="card" alt="img"/>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
              </div>
            </div>
          </div>
      </div>
    );
}

export default Search;
