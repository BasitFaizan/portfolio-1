let sideNav = document.querySelector('.sideNav');
let hamburger = document.querySelector('.hamburger');
let main = document.querySelector('.main');
let topNav = document.querySelector('.topNav');
let serviceContent = document.querySelector('.servicesContent');
let test = document.querySelector('.center')
let testimonial = document.querySelector('.testimonial');
hamburger.addEventListener('click',function(){
  sideNav.classList.toggle('active');
  main.classList.toggle('active');
  topNav.classList.toggle('active');
  serviceContent.classList.toggle('active');
  test.classList.toggle('active');
  testimonial.classList.toggle('active');
});