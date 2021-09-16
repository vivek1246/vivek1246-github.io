let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');
SameSite="";

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');

window.onscroll = () =>{

  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  section.forEach(sec =>{

    let top = window.scrollY;
    let height = sec.offsetHeight;
    let offset = sec.offsetTop - 150;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height){
      navLinks.forEach(links =>{
        links.classList.remove('active');
        // document.querySelector('header .navbar a[href*='+id+']').classList.add('active');
      });
    };

  });

}

// var swiper = new Swiper(".home-slider", {
  // spaceBetween: 200,
  // centeredSlides: true,
  // autoplay: {
    // delay: 7500,
    // disableOnInteraction: false,
  // },
  // pagination: {
    // el: ".swiper-pagination",
    // clickable: true,
  // },
  // loop:true,
// });

// var swiper = new Swiper(".review-slider", {
  // spaceBetween: 20,
  // centeredSlides: true,
  // autoplay: {
    // delay: 7500,
    // disableOnInteraction: false,
  // },
  // loop:true,
  // breakpoints: {
    // 0: {
        // slidesPerView: 1,
    // },
    // 640: {
      // slidesPerView: 2,
    // },
    // 768: {
      // slidesPerView: 2,
    // },
    // 1024: {
      // slidesPerView: 3,
    // },
  // },
// });

const sliderElm = document.querySelector(".slider-container .slider");
const btnLeft = document.querySelector(".slider-container .btn-left");
const btnRight = document.querySelector(".slider-container .btn-right");

const numberSliderBoxs = sliderElm.children.length;
let idxCurrentSlide = 0;

// Functions:
function moveSlider() {
  let leftMargin = (sliderElm.clientWidth / numberSliderBoxs) * idxCurrentSlide;
  sliderElm.style.marginLeft = -leftMargin + "px";
}
function moveLeft() {
  if (idxCurrentSlide === 0) idxCurrentSlide = numberSliderBoxs - 1;
  else idxCurrentSlide--;

  moveSlider();
}
function moveRight() {
  if (idxCurrentSlide === numberSliderBoxs - 1) idxCurrentSlide = 0;
  else idxCurrentSlide++;

  moveSlider();
}

// Event Listeners:
btnLeft.addEventListener("click", moveLeft);
btnRight.addEventListener("click", moveRight);
window.addEventListener("resize", moveSlider);

