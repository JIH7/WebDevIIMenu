const $ = selector => document.querySelector(selector);

// The $ function made me want to do a cool, programmery arrow function as well 😎
const processEntry = value => value >= 0 && value <= 99 ? makeChange(value) :
alert("Error: Please enter a value from 0-99"); // If the value is in range, call makeChange. Else, alert the error

// makeChange takes a value in cents, then performs a sequence of division and modulus operations to determine each coin
function makeChange(cents) {
    let quarters = parseInt(cents / 25); // Get the quarters by dividing by 25
    cents = cents % 25; // Get the remaining cents
    $("#quarters").value = quarters;

    let dimes = parseInt(cents / 10) // Rinse and repeat for each coin
    cents = cents % 10;
    $("#dimes").value = dimes;
    
    let nickels = parseInt(cents / 5);
    cents = cents % 5;
    $("#nickels").value = nickels;

    $("#pennies").value = cents; // Whatever is left in cents is our amount of pennies
}

// Add our event listener when the content loads
document.addEventListener("DOMContentLoaded", () => {
    /*
    Find the calculate button and attatch a 'click' event listener.
    I use an anonymous function rather than directly invoking processEntry as the event
    This is so I can pass a specific argument when processEntry is called (the value from the input field)
    */
    $("#calculate").addEventListener("click", () => {
        processEntry(parseInt($("#cents").value));
    });
})