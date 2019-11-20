//document.getElementsByClassName("container8")
//document.getElementById
//document.querySelector  ищет только первый
//document.querySelectorAll   находит все

document.getElementById("burger").onclick = function() {
    addMenu();
}

function addMenu () {
    document.getElementById("menu").classList.toggle("show");
} 

document.getElementById("burger2").onclick = function() {
  addMenu2();
}

function addMenu2 () {
  document.getElementById("menu2").classList.toggle("show2");
} 

$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        800:{
            items:3,
            nav:true
        },
        1000:{
            items:6,
            nav:true
      },
    }
})
});


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

  let menu2Elem = document.getElementById('sweeties2');
  let title2Elem = menu2Elem.querySelector('.title2');

  title2Elem.onclick = function() {
    menu2Elem.classList.toggle('open');
  };

  let menu3Elem = document.getElementById('sweeties3');
  let title3Elem = menu3Elem.querySelector('.title3');

  title3Elem.onclick = function() {
    menu3Elem.classList.toggle('open');
  };
