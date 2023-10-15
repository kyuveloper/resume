const toggleBtn = document.querySelector('#cover_menus_togglebar');
const toggleMenu = document.querySelector('#cover_menus_toggle');
const barColorChange = document.querySelector('.contents');

toggleBtn.addEventListener('click', () => {
    toggleMenu.classList.toggle('active');
    toggleBtn.classList.toggle('barColor');
    barColorChange.classList.toggle('colorChaned');
})

// const windowResize = innerWidth;
// console.log(windowResize);
window.addEventListener('resize', 
    function() {
        if (this.innerWidth > 992) {
            toggleMenu.classList.remove('active');
            toggleBtn.classList.remove('barColor');
            barColorChange.classList.remove('colorChaned');
        }
    })
