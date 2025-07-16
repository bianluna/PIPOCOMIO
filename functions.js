document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('trackButton');
    const display = document.getElementById('lastClickTime');
    
    // Load saved time from localStorage if it exists
    const savedTime = localStorage.getItem('lastButtonClickTime');
    if (savedTime) {
        display.textContent = `Last clicked: ${savedTime}`;
    }
    
    button.addEventListener('click', function() {
        // Get current date and time
        const now = new Date();
        const options = { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric',
            hour: '2-digit', 
            minute: '2-digit', 
            hour12: true 
        };
        const formattedTime = now.toLocaleDateString('en-US', options);
        
        // Display the time
        display.textContent = `${formattedTime}`;
        
        // Save to localStorage to persist between page refreshes
        localStorage.setItem('lastButtonClickTime', formattedTime);
    });
});