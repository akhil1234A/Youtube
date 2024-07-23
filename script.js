const menu = document.getElementById('menu-icon');
// console.log(menu);
const toggleBox = document.getElementById('sidebar');
// console.log(toggleBox);

// menu.addEventListener('click', function () {
//   if (window.innerWidth <= 800) { // Check if screen width is smaller than 768px
//     if (toggleBox.style.display === 'none' || toggleBox.style.display === '') {
//         toggleBox.style.display = 'block';
//     } else {
//         toggleBox.style.display = 'none';
//     }
// }
// });


let sidebarState = 0; // 0 means sidebar is not visible, 1 means sidebar is visible

// Function to check viewport width and toggle sidebar
function toggleSidebar() {
    console.log('Function called');
    console.log('Current state:', sidebarState);
    if (window.innerWidth < 800) {
        if (sidebarState === 0) {
            // Show the sidebar
            toggleBox.style.position = 'fixed'; // 'fixed' instead of 'fixed'
            toggleBox.style.width = '250px';
            toggleBox.style.top = '50px';
            toggleBox.style.left = '0px';
            toggleBox.style.display = 'block'; // Changed from 'fixed' to 'block'
            sidebarState = 1; // Update state to 1
            toggleBox.style.zIndex='100';
        } else {
            // Hide the sidebar
            console.log('Hiding sidebar');
            toggleBox.style.display = 'none'; 
            sidebarState = 0; // Update state to 0
        }
    }
}

// Add event listener for menu icon click
menu.addEventListener('click', toggleSidebar);