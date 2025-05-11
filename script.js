// Function to show a message when the button is clicked
function showMessage() {
    const messageDiv = document.getElementById('message');
    const currentTime = new Date().toLocaleTimeString();
    messageDiv.innerHTML = `Button clicked at ${currentTime}!`;
    messageDiv.style.backgroundColor = '#e8f0fe';
}

// Add some dynamic content when the page loads
window.onload = function() {
    const messageDiv = document.getElementById('message');
    messageDiv.innerHTML = 'Welcome! The page has loaded successfully.';
    messageDiv.style.backgroundColor = '#e8f0fe';
} 