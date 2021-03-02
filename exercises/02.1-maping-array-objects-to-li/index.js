import React from "react";
import ReactDOM from "react-dom";

const animals = [{ label: "Horse" }, { label: "Turtle" }, { label: "Elephant" }, { label: "Monkey" }]; //en este caso singleAnima será cada objeto dentro del arrary

/**
 * change the content of the map function
 **/ const animalsInHTML = animals.map((singleAnimal, i) => {
	return (
		<li key={i}>{singleAnimal.label}
		</li>  //i representa al index
	); //como singleAnimal representa a cada objeto, agregamos .label para acceder al nombre de cada animal
});

ReactDOM.render(<ul>{animalsInHTML}</ul>, document.querySelector("#myDiv"));
