//start Nav Bar
document.querySelector(".mainSearch").onclick = function(){
    document.querySelector(".nav-search").classList.add("open")
}
document.querySelector(".searchX").onclick = function(){
    document.querySelector(".nav-search").classList.remove("open")
}
document.querySelector(".mainuser").onclick = function(){
    document.querySelector(".login").classList.add("open")
}
document.querySelector(".loginX").onclick = function(){
    document.querySelector(".login").classList.remove("open")
}
document.querySelector(".show").onclick =function(){
    document.querySelector(".show").style.display = "none";
    document.querySelector(".hide").style.display = "block";
    document.querySelector(".password").type ="text";
}
document.querySelector(".hide").onclick =function(){
    document.querySelector(".hide").style.display = "none";
    document.querySelector(".show").style.display = "block";
    document.querySelector(".password").type ="password";
}
//End Nav Bar
   

//Start Header
var swiperr = new Swiper('.testimnial', {
    // Optional parameters
    direction: 'horizontal', // 'vertical' for vertical slides
    loop: true, // Enable loop mode
    autoplay: {
      delay: 1500, // Autoplay delay in milliseconds
    },
    speed: 1000, // Transition speed in milliseconds
    pagination: {
      el: '.swiper-pagination',
      clickable: true, // Enable pagination bullets clickable
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false, // Allow keyboard control outside viewport
    },
    mousewheel: {
      invert: true, // Invert mousewheel direction
    },
    slidesPerView: 1, // Number of slides per view
    spaceBetween: 30, // Space between slides in pixels
  });

  //End Header
//Start Testimonial
var swiper = new Swiper('.Himages', {
    // Optional parameters
    direction: 'horizontal', // 'vertical' for vertical slides
    loop: true, // Enable loop mode
    autoplay: {
      delay: 1500, // Autoplay delay in milliseconds
    },
    speed: 1000, // Transition speed in milliseconds
    pagination: {
      el: '.swiper-pagination',
      clickable: true, // Enable pagination bullets clickable
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false, // Allow keyboard control outside viewport
    },
    mousewheel: {
      invert: true, // Invert mousewheel direction
    },
    slidesPerView: 1, // Number of slides per view
    spaceBetween: 30, // Space between slides in pixels
  });

  //End Testimonial

  //start dark
  document.querySelector(".moon").onclick = function(){
    document.querySelector("body").classList.add("dark");
    document.querySelector(".moon").style.display ="none";
    document.querySelector(" .sun").style.display ="block";
}
  document.querySelector(".sun").onclick = function(){
    document.querySelector("body").classList.remove("dark");
    document.querySelector(".moon").style.display ="block";
    document.querySelector(" .sun").style.display ="none";
}
//end Dark
window.onscroll = function(){
  if(window.scrollY > 600){
    document.querySelector(".up").style.display = "block"
  }
  else{
    document.querySelector(".up").style.display = "none"
  }
}
document.querySelector(".up").onclick = function(){
  window.scroll({
    top :0 ,
    behavior :"smooth"
  })
}