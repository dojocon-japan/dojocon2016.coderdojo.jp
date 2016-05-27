'use strict';

var jQuery = require('jquery');
var $ = jQuery;
var scrollsmoothly = require('./scrollsmoothly.js');
var xlScreen = 1440;

$(function() {

$('.js-menu-trigger, .js-menu-screen, .js-menu-close').on('click touchstart', function (e) {
  $('.js-menu, .js-menu-screen').toggleClass('is-visible');
  e.preventDefault();
});

$('.js-menu .nav a:not(.js-child-menu-trigger)').on('click', function () {
  if ($(window).width() < xlScreen) {
    $('.js-menu, .js-menu-screen').toggleClass('is-visible');
  }
});

var text;
$('.js-child-menu-trigger').attr('href', '').on('click touchstart', function (e) {
  text = $('i', this).text();
  $('i', this).text(text == '＋' ? '−' : '＋');
  $(this).siblings('.js-child-menu').slideToggle();
  e.preventDefault();
});

var timer = false;
$(window).on('scroll', function() {
  if (timer) clearTimeout(timer);
  timer = setTimeout(function() {
    if ($(window).scrollTop() > 70) {
      $('.js-menu').addClass('scrolled');
    } else {
      $('.js-menu').removeClass('scrolled');
    }
  }, 100);
});

});
