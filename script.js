const menu = document.getElementById('menu-icon');
console.log(menu);
const toggleBox = document.getElementById('sidebar');
console.log(toggleBox);

menu.addEventListener('click', function () {
  if (window.innerWidth <= 800) { // Check if screen width is smaller than 768px
    if (toggleBox.style.display === 'none' || toggleBox.style.display === '') {
        toggleBox.style.display = 'block';
    } else {
        toggleBox.style.display = 'none';
    }
}
});



