"use strict";

$(function() {
  slideNavigation();
});

function slideNavigation() {
  $(".navOpen").on("click", function( event ) {
    var event;
    event.preventDefault();
    $(".menuContent").toggleClass("closedLeft");
    $(".navClose").toggleClass("openedLeft");
    $(this).toggleClass("closedLeft");
    $(".mask").toggleClass("run");
    $("html").toggleClass("nonScroll");
    $(".content").toggleClass("pushRight");
  });

  $(".navOpen > .right").on("click", function( event ) {
    var event;
    event.preventDefault();
    $(".menuContent").toggleClass("closedRight");
    $(this).toggleClass("closedRight");
    $(".mask").toggleClass("run");
    $("html").toggleClass("nonScroll");
    $(".content").toggleClass("pushLeft");
  });

  $(".navClose, .mask").on("click", function() {
    $(".menuContent").toggleClass("closedLeft");
    $(".navOpen").toggleClass("closedLeft");
    $(".mask").toggleClass("run");
    $("html").toggleClass("nonScroll");
    $(".content").toggleClass("pushRight");
  });

  $(".navClose > .right, .mask").on("click", function() {
    $(".menuContent").toggleClass("closedRight");
    $(".navOpen").toggleClass("closedRight");
    $(".mask").toggleClass("run");
    $("html").toggleClass("nonScroll");
    $(".content").toggleClass("pushLeft");
  });
}