const root = document.documentElement;
const btn = document.getElementById('theme-toggle');
const stored = localStorage.getItem('theme');
function applyTheme(theme) {
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
    document.body.classList.add('bg-gray-900','text-gray-100');
  } else {
    document.documentElement.classList.remove('dark');
    document.body.classList.remove('bg-gray-900','text-gray-100');
  }
  localStorage.setItem('theme', theme);
}
btn.addEventListener('click', () => {
  const next = localStorage.getItem('theme') === 'dark' ? 'light' : 'dark';
  applyTheme(next);
});
if (stored) applyTheme(stored);