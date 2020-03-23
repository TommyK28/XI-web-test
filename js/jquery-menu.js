$(document).ready(function() {
  $(".hamburger-menu").click(function() {
    $(".hamburger span").toggleClass("active");
    $(".top-nav").toggleClass("open");
  });

  $(".btn1").click(function() {
    $(".dropdown-menu1").toggleClass("onclick");
    $(".btn1 svg").toggleClass("rotate");
  });
  $(".btn2").click(function() {
    $(".dropdown-menu2").toggleClass("onclick");
    $(".btn2 svg").toggleClass("rotate");
  });
});
