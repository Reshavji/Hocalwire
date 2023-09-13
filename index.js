// Get references to the main content and window
const mainContent = document.querySelector('main');
const windowHeight = window.innerHeight;

// Add an event listener to detect browser scroll
window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;

  // Set the main content's scroll position to match the browser scroll position
  mainContent.scrollTop = scrollPosition;
});

// Get a reference to the button and the left sidebar
const sidebarToggle = document.getElementById('sidebar-toggle');
const leftSidebar = document.querySelector('.left-sidebar');

// Add an event listener to the button
sidebarToggle.addEventListener('click', toggleSidebar);

// Function to toggle the sidebar
function toggleSidebar() {
  leftSidebar.classList.toggle('show-sidebar');
}
