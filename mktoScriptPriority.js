<script>
jQuery(document).ready(function($) {
    // Define the specific disclaimer/opt-out phrases we want to detect
    const targetPhrases = [
        "By entering your information, you agree to receive personalized marketing communications from Medline Industries, LP",
        "I choose to opt out of receiving valuable information about new products, educational resources, and best practices."
    ];

    // Select all rows in the Marketo form that might contain our target text
    const $formRows = $('.mktoFormRow');
    const priorityRows = [];

    // Loop through each row to find matches
    $formRows.each(function () {
        // Get the trimmed text content of the current row
        const rowText = $(this).text().trim();

        // Check if this row contains any of the target phrases
        const isPriority = targetPhrases.some(phrase => rowText.includes(phrase));

        if (isPriority) {
            // Add an ID to identify this row
            $(this).attr('id', 'mktoPriorityInput');

            // Push the DOM element into an array for reordering later
            priorityRows.push(this);
        }
    });

    // Find the submit button's row so we can insert priority rows above it
    const $submitButton = $('.mktoButtonRow');

    // Reorder the priority rows so they appear strictly above the submit button
    if ($submitButton.length && priorityRows.length) {
        priorityRows.forEach(function (row) {
            // Insert each matched row before the submit button row
            $(row).insertBefore($submitButton);
        });
    }
});
</script>
