function showSection(sectionId) {
    var sections = document.querySelectorAll('section');
    for (var i = 0; i < sections.length; i++) {
        sections[i].style.display = 'none';
    }
    document.getElementById(sectionId).style.display = 'block';
}
function toggleDarkMode() {
    var body = document.body;
    body.classList.toggle("dark-mode");
    body.classList.toggle("light-mode");
    
    var logo = document.querySelector('.logo');
    if (body.classList.contains('light-mode')) {
        logo.src = 'img/black.png'; // Change to the path of your black logo image
    } else {
        logo.src = 'img/white.png'; // Change to the path of your white logo image
    }
}



