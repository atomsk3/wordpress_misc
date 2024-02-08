// Author: Ryan Cronin
// WordPress Plugin: https://www.gravityforms.com
// Date published: 2/8/2024
//
// ABOUT:
// This is primarily to be used with multi-page Gravity Forms when the user wishes to add a custom class to each "next" button with numerical iteration so each button class is unique.
//
// The script finds the class 'gform_page_footer' on the page. 
// Then adds a class 'mdln_gf_step' to each input element with the class 'gform_next_button' within that 'gform_page_footer' container. 
// Also adds a '_x' to each class name added. For example the first instance containg the class 'gform_page_footer' adds 'mdln_gf_step_1', the second containg the class 'gform_page_footer' adds 'mdln_gf_step_2', etc.
// 
// HOW TO USE: 
// Add script to page containing your Gravity Form shortcode, the script will execute on page load.
// 

// Counter for the 'gform_page_footer' containers
var pageFooterCount = 0;

// Find all elements with class 'gform_page_footer'
var pageFooters = document.querySelectorAll('.gform_page_footer');

// Iterate over each 'gform_page_footer' element
pageFooters.forEach(function(pageFooter) {
    // Increment the counter for each 'gform_page_footer' container
    pageFooterCount++;

    // Find the input element with class 'gform_next_button' within the current container
    var nextButton = pageFooter.querySelector('input.gform_next_button');
    
    // Add class 'mdln_gf_step_' with the current count to the input element
    nextButton.classList.add('mdln_gf_step_' + pageFooterCount);
});
