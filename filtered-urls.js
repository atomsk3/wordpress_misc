jQuery(document).ready(function ($) {
  const $category = $('#filter-category');
  const $system = $('#filter-system');

  if (!$category.length || !$system.length) return;

  const params = new URLSearchParams(window.location.search);

  if (params.has('category')) $category.val(params.get('category'));
  if (params.has('system')) $system.val(params.get('system'));

  function updateURL() {
    const newParams = new URLSearchParams();
    newParams.set('category', $category.val() || 'select');
    newParams.set('system', $system.val() || 'select');
    window.location.href = `${window.location.pathname}?${newParams.toString()}`;
  }

  $category.on('change', updateURL);
  $system.on('change', updateURL);
});
