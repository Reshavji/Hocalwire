// Get references to the main content and window
const mainContent = document.querySelector('main');
const windowHeight = window.innerHeight;

// Add an event listener to detect browser scroll
window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;

  // Set the main content's scroll position to match the browser scroll position
  mainContent.scrollTop = scrollPosition;
});

// Update the main content's height to match the window height
mainContent.style.height = `${windowHeight}px`;
