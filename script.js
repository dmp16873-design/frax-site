const themeToggle = document.getElementById('theme-toggle');

themeToggle?.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const isDark = document.body.classList.contains('dark');
  themeToggle.textContent = isDark ? 'Светлая тема' : 'Тёмная тема';
});
