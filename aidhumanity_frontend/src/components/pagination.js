import React, {useState, useEffect} from "react";
import Images from "./Images";

function Pagination() {
 const [images, setImages] = useState([]); 
 useEffect (()=> {
    fetch("https://jsonplaceholder.typicode.com/albums/1/photos").then (
      response => response.json().then(data=>{
        setImages(data);
      })
    )
 }, [])
  return (
    <div>
      <Images data = { images } />
      <p>This is pagination</p>
    </div>
  );
}
export default Pagination;