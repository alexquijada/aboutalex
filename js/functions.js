jQuery(function ($) {
  "use strict";

  // ************ Back to Top
  var amountScrolled = 700;
  var backBtn = $("a.scrollToTop");
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > amountScrolled) {
      backBtn.fadeIn("slow");
    } else {
      backBtn.fadeOut("slow");
    }
  });
  backBtn.on("click", function () {
    $("html, body").animate({
      scrollTop: 0
    }, 700);
    return false;
  });

  // Push Menus 
  var $menuRight = $(".pushmenu-right");
  var $toggleright = $("#menu_bars.right");
  if ($("#menu_bars").length) {
    $("body").addClass("pushmenu-push");
    $toggleright.on("click", function () {
      $(this).toggleClass("active");
      $(".pushmenu-push").toggleClass("pushmenu-push-toleft");
      $menuRight.toggleClass("pushmenu-open");
      return false;
    });
  }

  //push DropDowns 
  var side_drop = $('.push_nav .dropdown');
  side_drop.on('show.bs.dropdown', function (e) {
    $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
  });
  side_drop.on('hide.bs.dropdown', function (e) {
    $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
  });

  // ************ Accordions 
  $(".items > li:first-child .sub-items").fadeIn();
  $(".items > li:first-child >").addClass("expanded");
  $(".items > li > a").on('click', function (e) {
    e.preventDefault();
    var $this = $(this);
    if ($this.hasClass("expanded")) {
      $this.removeClass("expanded");
    } else {
      $(".items a.expanded").removeClass("expanded");
      $this.addClass("expanded");
      $(".sub-items").filter(":visible").slideUp("normal");
    }
    $this.parent().children("ul").stop(true, true).slideToggle("normal");
  });

  
   /*Equal Heights*/
    if($(".equalheight").length){
        $(".equalheight").matchHeight({ property: 'height' });
    }



  // ************Owl Carousel
  $("#news_slider").owlCarousel({
    autoPlay: false,
    items: 3,
    pagination: false,
    stopOnHover: true,
    navigationText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
    navigation: true,
    itemsDesktop: [1199, 2],
    itemsDesktopSmall: [979, 2],
    itemsMobile: [479, 1],

  });

  $("#expert_slider1").owlCarousel({
    autoPlay: false,
    items: 4,
    pagination: false,
    stopOnHover: true,
    navigationText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
    navigation: true,
    itemsDesktop: [1199, 2],
    itemsDesktopSmall: [979, 2],
    //itemsTablet: [768,2],
    itemsMobile: [150, 1],

  });
	
	$("#expert_slider2").owlCarousel({
    autoPlay: false,
    items: 4,
    pagination: false,
    stopOnHover: true,
    navigationText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
    navigation: true,
    itemsDesktop: [1199, 2],
    itemsDesktopSmall: [979, 2],
    //itemsTablet: [768,2],
    itemsMobile: [150, 1],

  });



  // ============= Revolution Slider =============

  //Full Screen
  var revapi = $("#rev_slider_full").revolution({
    sliderType: "standard",
    sliderLayout: "fullscreen",
    scrollbarDrag: "true",
    delay: 9000,
    spinner: "off",
    navigation: {
      arrows: {
        enable: true
      },
      mouseScrollNavigation: "off",
      keyboardNavigation: "off",
      touch: {
        touchenabled: "on",
        swipe_threshold: 75,
        swipe_min_touches: 1,
        swipe_direction: "horizontal",
        drag_block_vertical: false
      }

    },
    parallax: {
      type: "mouse",
      origo: "slidercenter",
      speed: 9000,
      levels: [2, 3, 4, 5, 6, 7, 12, 16, 10, 50],
    },
    responsiveLevels: [4096, 1024, 778, 480],
    gridwidth: [1170, 960, 750, 480],
    gridheight: [670, 600, 500, 390],
  });


  var revVideo = $("#rev_slider_video").revolution({
    sliderType: "standard",
    sliderLayout: "fullscreen",
    scrollbarDrag: "true",
    delay: 9000,
    spinner: "off",
    navigation: {
      arrows: {
        enable: false
      },
      mouseScrollNavigation: "off",
      keyboardNavigation: "off",
      touch: {
        touchenabled: "on",
        swipe_threshold: 75,
        swipe_min_touches: 1,
        swipe_direction: "horizontal",
        drag_block_vertical: false
      }

    },
    parallax: {
      type: "mouse",
      origo: "slidercenter",
      speed: 9000,
      levels: [2, 3, 4, 5, 6, 7, 12, 16, 10, 50],
    },
    responsiveLevels: [4096, 1024, 778, 480],
    gridwidth: [1170, 960, 767, 480],
    gridheight: [600, 550, 450, 320],
  });


  // ============= Parallax=============
  $(".page_header").parallax("50%", 0.3);
  $("#parallax").parallax("50%", 0.2);
  $("#counter").parallax("50%", -0.02);


  // +++++ WOW Transitions
  if ($(window).width() > 767) {
    new WOW().init();
  }


});

