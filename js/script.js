// Created by Graeme
// Created on: April 12
// JS functions for index.html


// This function calculates the volume of a triangular pyramid
'use strict';
function answer() {
	// Declares variables 
	let sideA = parseFloat(document.getElementById('side-a').value)
	let sideB = parseFloat(document.getElementById('side-b').value)
	let height = parseFloat(document.getElementById('height').value)
	//Calculate volume
	let volume = 1 / 6 * sideA * sideB * height
	//Answers
	document.getElementById('volume').innerHTML = 'The volume of the triangular pyramid is ' + volume.toFixed(2) + " cm³" 
}