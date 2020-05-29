import React from "react";


const NasaCard = (props) => {
  return (
		<div className="pic-list">
			<h2>Title: {props.nasa.title}</h2>
			<img
				className="nasa-image"
				alt="random planet images"
				src={props.nasa.hdurl}
			/>
			<div className="bottom">
				<p>Date: {props.nasa.date} </p>
				<p> Explanation: {[props.nasa.explanation]} </p>
			</div>
		</div>
	);
}

export default NasaCard;