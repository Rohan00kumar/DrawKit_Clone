var menu = document.querySelector('.menu');
var navbar2 = document.querySelector('.navbar2');
var image = document.querySelector('.menu img');

menu.addEventListener('click', function () {
    navbar2.classList.toggle('active');
    menu.classList.toggle('active');
})


window.addEventListener('scroll', function () {
    var scroll = document.querySelector('.fa');
    scroll.classList.toggle("active", window.scrollY > 500)
})
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}
