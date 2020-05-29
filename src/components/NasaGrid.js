import React,  {useState, useEffect } from "react";
import NasaCard from "./NasaCard";
import axios from "axios";


export default function NasaGrid() {
  const [picture, setPicture] = useState({}) ;

useEffect(() => {
  axios
		.get(
			"https://api.nasa.gov/planetary/apod?api_key=IZXoWQG8HjgT45Xq6XfdN3Cj7lbihHYu5VmnwMBF"
		)
		.then((response) => {
      console.log(response);
      setPicture(response.data);
		})
		.catch((error) => {
			console.log('no picture!', error);
		});
}, [])

return (
<div className="nasa-data">
   
<NasaCard  nasa = {picture}
/>
    
</div>
)
}