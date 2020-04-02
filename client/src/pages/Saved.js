import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../utils/API";
import DeleteBtn from  "../components/DeleteBtn"
import ViewBtn from "../components/ViewBtn";

function Saved(props) {
  const [book, setBook] = useState({})

  // When this component mounts, grab the book with the _id of props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  const {id} = useParams()
  useEffect(() => {
    API.getBook(id)
      .then(res => setBook(res.data))
      .catch(err => console.log(err));
  }, [])

  return (
    <div className="card mb-3">
    <div className= "ml-auto" style={{display:"flex", float:"right"}}>
    <ViewBtn/>
    <DeleteBtn/>
    </div>
    <div>
    <p>Saved Books</p>
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
);
  }


export default Saved;
