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


//Setting Natural Height and Width to Images
document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        const tempImg = new Image();
        tempImg.src = img.src;
        tempImg.onload = () => {
            img.setAttribute('width', tempImg.naturalWidth);
            img.setAttribute('height', tempImg.naturalHeight);
        };
    });
});

