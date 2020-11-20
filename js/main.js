function onTabChanged(tabUrl) {
    $("#content").load(tabUrl);
}

// Load home when site starts
window.addEventListener('load', () => onTabChanged('./pages/home.html'));
