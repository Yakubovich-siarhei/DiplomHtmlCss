//document.getElementsByClassName("container8")
//document.getElementById
//document.querySelector  ищет только первый
//document.querySelectorAll   находит все

/* document.getElementById("burger").onclick = function() {
    addMenu();
}

function addMenu () {
    document.getElementById("menu").classList.toggle("show");
} */

/* $(function() {
    // Owl Carousel
    var owl = $(".owl-carousel");
    owl.owlCarousel({
      items: 6,
      margin: 32,
      loop: true,
      nav: true
    });
  });
 */

  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:6
        }
    }
})

$(".item").hover(function(e) {
    $($(this).data("tooltip")).css({
      left: e.pageX + 1,
      top: e.pageY + 1
    }).stop().show(100);
  }, function() {
    $($(this).data("tooltip")).hide();
  });


  let menuElem = document.getElementById('sweeties');
  let titleElem = menuElem.querySelector('.title');

  titleElem.onclick = function() {
    menuElem.classList.toggle('open');
  };
