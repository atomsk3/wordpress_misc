// Wait for the document to fully load
document.addEventListener('DOMContentLoaded', function() {
    // Define the list of keywords to check in the URL
    const keywords = ["Aura", "Nuance", "Halo", "Solstice", "Sonata", "Linen", "Striae", "Meadow", "Stride", "Midtown", "Trellis", "Motley", "Dune"];

    // Get the current page URL
    const currentURL = window.location.href;

    // Split the URL into segments and check each segment for keywords
    const urlSegments = currentURL.split(/[\/\-]/); // Split by slashes and dashes

    // Check if any keyword is present in the URL segments
    const keywordFound = keywords.some(keyword => urlSegments.includes(keyword.toLowerCase()));

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
