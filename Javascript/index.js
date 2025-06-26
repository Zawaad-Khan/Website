function toggleMenu() {
  const menu = document.getElementById('side-menu');
  menu.classList.toggle('hidden');
}
document.addEventListener('click', function(event) {
  const menu = document.getElementById('side-menu');
  const hamburger = document.querySelector('.hamburger');
  if (!menu.contains(event.target) && !hamburger.contains(event.target)) {
    menu.classList.add('hidden');
  }
});
