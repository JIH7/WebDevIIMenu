"use strict";
const $ = selector => document.querySelector(selector);

/*********************
*  helper functions  *
**********************/
const calculateCelsius = temp => (temp-32) * 5/9;
const calculateFahrenheit = temp => temp * 9/5 + 32;

const toggleDisplay = (label1Text, label2Text) => {
	// Find the label elements and apply the correct text
	$("#degree_label_1").innerText = label1Text;
	$("#degree_label_2").innerText = label2Text;
	// Select the text input, the user will probably want to enter a value after selecting a formula
	$("#degrees_entered").select();
}

/****************************
*  event handler functions  *
*****************************/
const convertTemp = () => {
	// Collect input   
	const input = parseFloat($("#degrees_entered").value);

	// Validate input
	// The second condition ensures no invalid characters are present by comparing the parsed number to the original string
	if (isNaN(input) || input != $("#degrees_entered").value) {
		$("#message").innerText = "You must enter a valid number for degrees"; // Update error text
		$("#degrees_computed").value = ""; // Clear output box if error
		$("#degrees_entered").select(); // Select input
		return; // Exit function before calculation
	}

	// Ternary expression calls the correct function based on if the to_celcius box is checked
	const output = $("#to_celsius").checked ? calculateCelsius(input) : calculateFahrenheit(input);
	
	$("#degrees_computed").value = output; // Display output
	$("#message").innerText = ""; // Clear error message
};

const toCelsius = () => toggleDisplay("Enter F degrees:", "Degrees Celsius:");
const toFahrenheit = () => toggleDisplay("Enter C degrees:", "Degrees Fahrenheit:");

document.addEventListener("DOMContentLoaded", () => {
	// add event handlers
	$("#convert").addEventListener("click", convertTemp);
    $("#to_celsius").addEventListener("click", toCelsius);
    $("#to_fahrenheit").addEventListener("click", toFahrenheit);
	
	// move focus
	$("#degrees_entered").focus();
});