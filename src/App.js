import React from "react";
import NasaGrid from "./components/NasaGrid";
import "./App.css";

function App(props) {
  return (
		<div className="app">
			<div className="logo-container">
				<h1>Nasa International Space Station Images</h1>
				<NasaGrid />
			</div>
		</div>
	);
}
export default App;
