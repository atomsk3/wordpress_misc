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

    // Define the list of keywords to check in the URL
    const keywords = ["Aura", "Nuance", "Halo", "Solstice", "Sonata", "Linen", "Striae", "Meadow", "Stride", "Midtown", "Trellis", "Motley"];

    // Get the current page URL
    const currentURL = window.location.href;

    // Check if the URL contains any of the keywords
    const keywordFound = keywords.some(keyword => currentURL.includes(keyword));

    if (keywordFound) {
        console.log('A keyword from the list was found in the URL.');

        // Select the div with class 'app-certification'
        let appCertificationDiv = document.querySelector('.app-certification');

        // Check if the div exists
        if (appCertificationDiv) {
            // Remove all inline styling from the div
            appCertificationDiv.removeAttribute('style');
            console.log('Inline styling removed from the app-certification div.');
        } else {
            console.log('App certification div not found.');
        }
    } else {
        console.log('No keywords from the list were found in the URL.');
    }
});
