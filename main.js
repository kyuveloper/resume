/*$(document).ready(function(){
    //상단 메뉴 고정
    var $contents = $('contents');
    $(window).scroll(function(){
        if($(this).scrollTop() > 0) {
            $contents.addClass('sticky');
        } else {
            $contents.removeClass('sticky');
        }
    })
});*/

/*function scrollY(e) {
    const contents = document.querySelector('.contents');
    
    if (window.scrollY > 0) {
        contents.classList.add('sticky');
    }
}

window.addEventListener('scroll', scrollY);*/

var scrollEvt = document.getElementsByClassName('contents');

window.addEventListener('scroll', function(){
    if (scroll >0) {
        contents.className = 'sticky';
    }
})