// script.js
document.addEventListener('DOMContentLoaded', () => {
    const yearSpan = document.querySelector('#currentYear');
    yearSpan.textContent = new Date().getFullYear();
});