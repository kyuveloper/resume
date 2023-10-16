const navBar = document.querySelector('.header_bar');
const toggleBtn = document.querySelector('.toggle_button');
const toggleMenu = document.querySelector('.toggle_menuBar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
        navBar.classList.add("scroll");
    } else if(window.scrollY < 31) {
        navBar.classList.remove("scroll");
    }
})

toggleBtn.addEventListener('click', () => {
    toggleMenu.classList.toggle('active');
})

window.addEventListener('resize', () => {
    if (innerWidth > 992) {
        toggleMenu.classList.remove('active');
    }
})