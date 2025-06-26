document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form.education-filters');
  if (!form) return;

  // Apply query parameters to form inputs on page load
  const urlParams = new URLSearchParams(window.location.search);
  for (const [key, value] of urlParams.entries()) {
    const input = form.querySelector(`[name="${key}"]`);
    if (input) input.value = value;
  }

  // Trigger the filter (Avada likely uses AJAX or form submit)
  if (urlParams.toString()) {
    const submitBtn = form.querySelector('button[type="submit"]');
    if (submitBtn) submitBtn.click();
  }

  // Update URL when filters change
  form.addEventListener('change', () => {
    const formData = new FormData(form);
    const params = new URLSearchParams();

    for (const [key, value] of formData.entries()) {
      if (value) params.set(key, value);
    }

    const newUrl = `${window.location.pathname}?${params.toString()}`;
    window.location.href = newUrl; // full reload to trigger filter results
  });
});