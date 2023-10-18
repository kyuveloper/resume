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


// Main Cover Twinkle Text
let target = document.querySelector('#dynamic');

function randomString() {
    let stringList = ["매우 꼼꼼한 성격", "끈기있게 해결하는 습관", "협업을 이끄는 능력"];
    let selectString = stringList[Math.floor(Math.random() * stringList.length)];
    let selectedStringAl = selectString.split("");
    return selectedStringAl;
}
function resetTyping() {
    target.textContent = "";
    dynamic(randomString());
}
function dynamic(randomList) {
    if (randomList.length > 0) {
        target.textContent += randomList.shift();
        setTimeout(function() {
            dynamic(randomList);
        }, 80);
    } else {
        setTimeout(resetTyping, 2000);
    }
}
dynamic(randomString());
function twinkle() {
    target.classList.toggle("twinkle");
}
setInterval(twinkle, 500);

