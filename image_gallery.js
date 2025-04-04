"use strict";

$(document).ready(() => {
    const caption = $("#caption"); // Caption object
    const image = $("#image"); // Display image

    const links = $("ul > li > a"); // Retrieve array of links
    links.each((_i, el) => { // Iterate over links
        const img = new Image(); // Image object for preload
        img.src = el.href; // Preload image
        img.alt = el.title;
        // Add eventlistener to current link. In this context the link is a DOM element, not a jQuery object
        el.addEventListener("click", e => { 
            e.preventDefault();
            image.attr("src", img.src); // Load image and caption when the link is clicked
            caption.attr("text", img.alt);
        });
    });
});