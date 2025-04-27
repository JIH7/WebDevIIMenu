"use strict";

$(document).ready( () => {
	const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;

	$("#arrival_date").focus(); // Focus first input on page load

	$("form").submit(e => {
		let formIsValid = true; // Flag to block form submission

		// Inputs saved in array for ease of iteration
		const formInputs = [
			$("#arrival_date"),
			$("#nights"),
			$("#adults"),
			$("#children"),
			$("#name"),
			$("#email"),
			$("#phone")
		]

		// Iterate over text inputs
		formInputs.forEach(el => {
			const id = el.attr('id'); // Fetch id to conditionally validate inputs
			const errText = $(`#${id} + span`); // Store this input's error text to edit later
			
			el.val(el.val().trim()); // Trim input

			if (el.val()) { // Logic if input is not empty
				errText.text("*");

				if (id == "arrival_date") { // Attempt to create Date object from input
					const dateString = formInputs[0].val();
					const dateArr = dateString.split("/");
					const date = new Date(dateArr[2] + "-" + dateArr[0] + "-" + dateArr[1]);

					if (isNaN(date.getDate())) { // Validate date by checking if it's date property is NaN
						errText.text("Please enter a valid date.");
					}
				} else if (id == "nights") { // Validate nights is a number
					if (isNaN(el.val())) {
						errText.text("Must be a number");
					}
				} else if (id == "email") { //Check email against Regex pattern
					const emailIsGood = emailPattern.test(el.val());
	
					formIsValid = emailIsGood ? formIsValid : false;
					errText.text(emailIsGood ? "" : "Email is not valid");
				} else if (id == "phone") {
					el.val(el.val().split("-").join("")); // Allow user to enter dashes
					// Handle input errors
					if (isNaN(el.val())) {
						errText.text("Enter only numbers")
					} else if (el.val().length != 10) {
						errText.text("Please enter a 10 digit phone number");
					}
				}
			} else { // Logic if field is empty
				errText.text("Field may not be empty.");
				formIsValid = false;
			}
		});

		if (!formIsValid) // If form has been flagged as invalid, don't move on to the response page
			e.preventDefault();
	});
});