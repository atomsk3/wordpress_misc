document.addEventListener('DOMContentLoaded', () => {
  const categorySelect = document.querySelector('#filter-category');
  const systemSelect   = document.querySelector('#filter-system');
  const params = new URLSearchParams(window.location.search);

  // Pre-select based on query string
  if (params.has('category') && categorySelect) {
    categorySelect.value = params.get('category');
  }
  if (params.has('system') && systemSelect) {
    systemSelect.value = params.get('system');
  }

  // Trigger Avada filter update if needed
  const applyFilters = () => {
    // Replace this with the site's actual filter function
    if (typeof fusionFilterUpdate === 'function') {
      fusionFilterUpdate();
    }
  };

  if (params.has('category') || params.has('system')) {
    applyFilters();
  }

  // Listen for user changes
  [categorySelect, systemSelect].forEach(select => {
    if (!select) return;
    select.addEventListener('change', () => {
      const q = new URLSearchParams();
      if (categorySelect.value) q.set('category', categorySelect.value);
      if (systemSelect.value)   q.set('system', systemSelect.value);

      window.location.href = `${window.location.pathname}?${q.toString()}`;
    });
  });
});