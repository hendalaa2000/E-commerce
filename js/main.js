// add / remve class active
const links = document.querySelectorAll(".nav-link");
links.forEach((link)=> {
    link.addEventListener("click", function(){
        links.forEach((e)=> {e.classList.remove('active')})
        this.classList.add('active')
    })
})
//product-details swiper

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 10,
    thumbs: {
      swiper: swiper,
    },
  });
  const x = document.getElementById('price');
  function function1(){
    x.innerHTML="200$"
  }
  function function2(){
    x.innerHTML="300$"
  }
  function function3(){
    x.innerHTML="400$"
  }
  function function4(){
    x.innerHTML="500$"
  }
  