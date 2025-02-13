"use strict";

const region1 = [1540, 1130, 1580, 1105];
const region2 = [2010, 1168, 2305, 4102];
const region3 = [2450, 1847, 2710, 2391];
const region4 = [1845, 1491, 1284, 1575];
const region5 = [2120, 1767, 1599, 3888];

const quarterTotals = [];

document.write("<h2>Sales by Quarter</h2>");

// Loop over arrays, each index is one quarter
for (let i = 0; i < 4; i++) {
    let total = 0; // Sum each region's totals for this quarter
    total += region1[i];
    total += region2[i];
    total += region3[i];
    total += region4[i];
    total += region5[i];

    // Store in the quarterTotals array
    quarterTotals[i] = total;
    // Printing while still in this loop to avoid a second loop or repeated statements
    document.write(`Q${i+1}: $${quarterTotals[i]}<br>`)
}

const regionTotals = [];

document.write("<h2>Sales by Region</h2>");
/*
Since we're summing each array rather than items from multiple arrays,
this is a good use case for array.reduce()

I created a function to avoid typing the same anonymous function several times.
*/

// Returns the sum of all items in the array
function sumArray(region) {
    return region.reduce((accumulator, value) => accumulator + value);
}

// Calculate each sum and add it to the regionTotals array
regionTotals.push(sumArray(region1));
regionTotals.push(sumArray(region2));
regionTotals.push(sumArray(region3));
regionTotals.push(sumArray(region4));
regionTotals.push(sumArray(region5));

/*
Rather than use a standard for loop, I use array.forEach() to write the elements to the DOM
*/
regionTotals.forEach((value, i) => {
    document.write(`Region ${i+1}: ${value}<br>`);
})

// Reusing my sumArray function from above to get the grand total
let totalSales = sumArray(regionTotals);

document.write("<h2>Total Sales</h2>");
document.write(`$${totalSales}`);