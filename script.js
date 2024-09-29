// Newsletter Popup Logic
window.onload = function() {
    let popup = document.getElementById('newsletterPopup');
    let close = document.querySelector('.close');

    // Display popup after a delay of 3 seconds
    setTimeout(() => {
        popup.style.display = 'block';
    }, 3000);

    // Close popup when clicking the close button
    close.onclick = function() {
        popup.style.display = 'none';
    }

    // Close popup when clicking outside the popup
    window.onclick = function(event) {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    }

    // Adding a smooth scroll behavior for navigation links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}
