const hamburgerButton = document.getElementById('hamburger');
const navList = document.getElementById('navul');

function toggleButton(){
    navList.classList.toggle('shows')
}

hamburgerButton.addEventListener('click', toggleButton)