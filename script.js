const toggle = document.getElementById('search-toggle');
  const input = document.getElementById('site-search');

  toggle.addEventListener('click', () => {
    input.classList.toggle('is-open');
    if (input.classList.contains('is-open')) {
      input.focus();
    }
  });