<script>
jQuery(document).ready(function ($) {
  const $categorySelect = $('#filter-category');
  const $systemSelect = $('#filter-system');

  if (!$categorySelect.length || !$systemSelect.length) return;

  const params = new URLSearchParams(window.location.search);
  let updated = false;

  const defaultCategory = $categorySelect.find('option').first().val() || 'select';
  const defaultSystem = $systemSelect.find('option').first().val() || 'select';

  // Inject default query params if missing
  if (!params.has('category')) {
    params.set('category', defaultCategory);
    updated = true;
  }

  if (!params.has('system')) {
    params.set('system', defaultSystem);
    updated = true;
  }

  if (updated) {
    const newUrl = `${window.location.pathname}?${params.toString()}`;
    history.replaceState({}, '', newUrl);
  }

  // Set dropdowns based on params if values are valid options
  if ($categorySelect.find(`option[value="${params.get('category')}"]`).length) {
    $categorySelect.val(params.get('category'));
  }

  if ($systemSelect.find(`option[value="${params.get('system')}"]`).length) {
    $systemSelect.val(params.get('system'));
  }

  // Trigger change to apply filters visually
  $categorySelect.trigger('change');
  $systemSelect.trigger('change');

  // Keep updating the URL on changes
  function updateURL() {
    const newParams = new URLSearchParams(window.location.search);
    newParams.set('category', $categorySelect.val() || defaultCategory);
    newParams.set('system', $systemSelect.val() || defaultSystem);

    const newUrl = `${window.location.pathname}?${newParams.toString()}`;
    history.replaceState({}, '', newUrl);
  }

  $categorySelect.on('change', updateURL);
  $systemSelect.on('change', updateURL);
});
</script>