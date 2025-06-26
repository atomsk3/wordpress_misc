<script>
jQuery(document).ready(function ($) {
  const $categorySelect = $('#filter-category');
  const $systemSelect = $('#filter-system');

  if (!$categorySelect.length || !$systemSelect.length) return;

  const params = new URLSearchParams(window.location.search);
  let updated = false;

  // Set default parameters if missing
  if (!params.has('category')) {
    params.set('category', 'select');
    updated = true;
  }

  if (!params.has('system')) {
    params.set('system', 'select');
    updated = true;
  }

  // Push default params to URL without reloading
  if (updated) {
    const newUrl = `${window.location.pathname}?${params.toString()}`;
    history.replaceState({}, '', newUrl);
  }

  // Set selects based on current URL
  $categorySelect.val(params.get('category'));
  $systemSelect.val(params.get('system'));

  // Trigger filtering
  $categorySelect.trigger('change');
  $systemSelect.trigger('change');

  // Update URL when dropdowns change
  function updateURL() {
    const newParams = new URLSearchParams(window.location.search);
    newParams.set('category', $categorySelect.val() || 'select');
    newParams.set('system', $systemSelect.val() || 'select');

    const newUrl = `${window.location.pathname}?${newParams.toString()}`;
    history.replaceState({}, '', newUrl);
  }

  $categorySelect.on('change', updateURL);
  $systemSelect.on('change', updateURL);
});
</script>