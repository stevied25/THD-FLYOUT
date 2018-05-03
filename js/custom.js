$(document).ready(function(){


$('.dropdown-menu').addClass('animated fadeIn');

$('.all-depts, .mega').hover(function() {
        $(".dim").toggleClass("page-overlay");
      });


$(".link1").hover(function() {
        $(".banner-area").toggleClass("bg-1");
      });


$(".link2").hover(function() {
        $(".banner-area").toggleClass("bg-2");
      });

$(".link3").hover(function() {
        $(".banner-area").toggleClass("bg-3");
      });

$(".link4").hover(function() {
        $(".banner-area").toggleClass("bg-4");
      });

$(".link5").hover(function() {
        $(".banner-area").toggleClass("bg-5");
      });

$(".link6").hover(function() {
        $(".banner-area").toggleClass("bg-6");
      });

$(".link7").hover(function() {
        $(".banner-area").toggleClass("bg-7");
      });

$(".link8").hover(function() {
        $(".banner-area").toggleClass("bg-8");
      });

$(".link9").hover(function() {
        $(".banner-area").toggleClass("bg-9");
      });


$(".link10").hover(function() {
        $(".banner-area").toggleClass("bg-10");
      });

$(".link11").hover(function() {
        $(".banner-area").toggleClass("bg-11");
      });

$(".link12").hover(function() {
        $(".banner-area").toggleClass("bg-12");
      });

$(".link13").hover(function() {
        $(".banner-area").toggleClass("bg-13");
      });

$(".link14").hover(function() {
        $(".banner-area").toggleClass("bg-14");
      });

$(".link15").hover(function() {
        $(".banner-area").toggleClass("bg-15");
      });

$(".link16").hover(function() {
        $(".banner-area").toggleClass("bg-16");
      });

$(".link17").hover(function() {
        $(".banner-area").toggleClass("bg-17");
      });

$(".link18").hover(function() {
        $(".banner-area").toggleClass("bg-18");
      });

$(".link19").hover(function() {
        $(".banner-area").toggleClass("bg-19");
      });

$(".link20").hover(function() {
        $(".banner-area").toggleClass("bg-20");
      });

$(".link21").hover(function() {
        $(".banner-area").toggleClass("bg-21");
      });

$(".link22").hover(function() {
        $(".banner-area").toggleClass("bg-22");
      });

$(".link23").hover(function() {
        $(".banner-area").toggleClass("bg-23");
      });




//hover off mega

$( ".home-page, .l1-page, .l2-page, .plp-page, .pip-page" ).hover(function() {
  $(".mega .L1").show(0);
  $(".mega .L2").hide(0);
    $(".mega .L3").hide(0);
});


// $(".link11").click(function() {
//         $(".mega").toggleClass("L2");
//       });


//navigating mega menu 

$(".L2-heating-cooling").click(function(){
    $(".mega .L2").show(0);
    $(".mega .L1").hide(0);
    $(".mega .L3").hide(0);
});


$(".L3-thermo").click(function(){
    $(".mega .L3").show(0);
    $(".mega .L1").hide(0);
    $(".mega .L2").hide(0);
});

$(".L1-main").click(function(){
    $(".mega .L1").show(0);
    $(".mega .L2").hide(0);
    $(".mega .L3").hide(0);
});


//navigating mega menu to show pages

// $(".l1-nav").click(function(){
//     $(".l1-page").show(0);

//     $(".l2-page").hide(0);
//     $(".home-page").hide(0);
//     $(".pip-page").hide(0);
//     $(".plp-page").hide(0);

// });


// $(".l2-nav").click(function(){
//   $(".l2-page").show(0);

//   $(".plp-page").hide(0);
//     $(".l1-page").hide(0);
//     $(".home-page").hide(0);
//     $(".pip-page").hide(0);
// });


// $(".plp-nav").click(function(){
//   $(".plp-page").show(0);

//     $(".l1-page").hide(0);
//     $(".l2-page").hide(0);
//     $(".home-page").hide(0);
//     $(".pip-page").hide(0);
// });



// $(".logo").click(function(){
//   $(".home-page").show(0);

//   $(".l1-page").hide(0);
//    $(".l2-page").hide(0);
//    $(".plp-page").hide(10);
//     $(".pip-page").hide(0);

// });


//navigating pages




// $(".l1-page").click(function(){
//   $(".l2-page").show(0);

//  $(".l1-page").hide(0);
//  $(".plp-page").hide(0);
//     $(".home-page").hide(0);
//     $(".pip-page").hide(0);
// });


// $(".l2-page").click(function(){
//   $(".plp-page").show(0);

//   $(".l2-page").hide(0);
//    $(".l2-page").hide(0);
//  $(".l1-page").hide(0);
//     $(".home-page").hide(0);
// });


// $(".plp-page").click(function(){
//   $(".pip-page").show(0);

//   $(".plp-page").hide(0);
//    $(".l2-page").hide(0);
//  $(".l1-page").hide(0);
//     $(".home-page").hide(0);
// });

// $(".nest").click(function(){
//     $(".pip-page").show(0);

//     $(".l1-page").hide(0);
//     $(".l2-page").hide(0);
//     $(".home-page").hide(0);
//     $(".plp-page").hide(0);

// });



    });