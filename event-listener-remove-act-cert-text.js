// Wait for the document to fully load
document.addEventListener('DOMContentLoaded', function() {
    // Select the div with class 'download-links'
    let downloadLinksDiv = document.querySelector('.download-links');
    
    // Check if the div exists
    if (downloadLinksDiv) {
        // Find the anchor or text node that contains 'ACT Certification'
        let actCertificationLink = Array.from(downloadLinksDiv.querySelectorAll('a, span'))
            .find(el => el.textContent.includes('ACT Certification'));
        
        // If the 'ACT Certification' text is found, remove the element
        if (actCertificationLink) {
            actCertificationLink.remove();  // Remove the element from the DOM
            console.log('ACT Certification link removed.');
        } else {
            console.log('ACT Certification link not found.');
        }
    } else {
        console.log('Download links div not found.');
    }
});
