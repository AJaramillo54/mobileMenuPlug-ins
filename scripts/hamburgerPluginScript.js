var main = function() {
  
  //hamburger-icon_side-left
  $('.hamburger-icon_side-left').on('click', function(){
    $('.menu_side-left').toggleClass('activate');
    var $activated = $('.menu_side-left').hasClass('activate');
    var $width = $('.menu_side-left').css('width');
    var $negWidth = parseInt($width) * -1;
    if($activated){
      $('.menu_side-left').animate({
                          left : '0px',
                        }, 300);
      $('body').animate({                       
                          left : $width,
                          right : $negWidth + 'px'
                        }, 300);
    } else {
      $('.menu_side-left').animate({
        left : $negWidth + 'px'
      }, 300);
      $('body').animate({                       
        right : '0px',
        left : '0px'
      }, 300);
    }
  });
  $('.x_side-left').on('click', function(){
    var $width = $('.menu_side-left').css('width');
    var $negWidth = parseInt($width) * -1;
    $('.menu_side-left').removeClass('activate').animate({
      left : $negWidth + 'px'
    }, 300);
    $('body').animate({
      right : '0px',
      left : '0px'
    }, 300); 
  });
  
  
  //hamburger-icon_side-right
  $('.hamburger-icon_side-right').on('click', function(){
    $('.menu_side-right').toggleClass('activate');
    var $activated = $('.menu_side-right').hasClass('activate');
    var $width = $('.menu_side-right').css('width');
    var $negWidth = parseInt($width) * -1;
    if($activated){
      $('.menu_side-right').animate({
        right : '0px'
      }, 300);
      $('body').animate({                       
        right : $width,
        left : $negWidth + 'px'
      }, 300);
    } else {
      $('.menu_side-right').animate({
        right : $negWidth + 'px'
      }, 300);
      $('body').animate({                       
        right : '0px',
        left : '0px'
      }, 300);
    }
  });
  $('.x_side-right').on('click', function(){
    var $width = $('.menu_side-right').css('width');
    var $negWidth = parseInt($width) * -1;
    $('.menu_side-right').removeClass('activate').animate({
      right : $negWidth + 'px'
    }, 300);
    $('body').animate({                       
      right : '0px',
      left : '0px'
    }, 300); 
  });
  
  //hamburger-icon_top
  $('.hamburger-icon_top').on('click', function(){
    $('.menu_top').toggleClass('activate');
    var $activated = $('.menu_top').hasClass('activate');
    var $width = $('.menu_top').css('width');
    var $negWidth = parseInt($width) * -1;
    if($activated){
      $('.menu_top').animate({
        top : '0px'
      }, 300);
      $('body').animate({                       
        top : $width,
        bottom : $negWidth + 'px'
      }, 300);
    } else {
      $('.menu_top').animate({
        top : $negWidth + 'px'
      }, 300);
      $('body').animate({                       
        top : '0px',
        bottom : '0px'
      }, 300);
    }
  });
  $('.x_top').on('click', function(){
    var $width = $('.menu_top').css('width');
    var $negWidth = parseInt($width) * -1;
    $('.menu_top').removeClass('activate').animate({
      top : $negWidth + 'px'
    }, 300);
    $('body').animate({                       
      top : '0px',
      bottom : '0px'
    }, 300); 
  });
  
  //hamburger-icon_bottom
  $('.hamburger-icon_bottom').on('click', function(){
    $('.menu_bottom').toggleClass('activate');
    var $activated = $('.menu_bottom').hasClass('activate');
    var $width = $('.menu_bottom').css('width');
    var $negWidth = parseInt($width) * -1;
    if($activated){
      $('.menu_bottom').animate({
        bottom : '0px'
      }, 300);
      $('body').animate({                       
        bottom : $width,
        top : $negWidth + 'px'
      }, 300);
    } else {
      $('.menu_bottom').animate({
        bottom : $negWidth + 'px'
      }, 300);
      $('body').animate({                       
        bottom : '0px',
        top : '0px'
      }, 300);
    }
  });
  $('.x_bottom').on('click', function(){
    var $width = $('.menu_bottom').css('width');
    var $negWidth = parseInt($width) * -1;
    $('.menu_bottom').removeClass('activate').animate({
      bottom : $negWidth + 'px'
    }, 300);
    $('body').animate({                       
      bottom : '0px',
      top : '0px'
    }, 300); 
  });
}; //end main

$(document).ready(main);