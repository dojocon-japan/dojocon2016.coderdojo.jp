'use strict';

var jQuery = require('jquery');
var $ = jQuery;
var scrollsmoothly = require('./scrollsmoothly.js');

$(function() {

$('.js-menu-trigger, .js-menu-screen, .js-menu-close').on('click touchstart', function (e) {
  $('.js-menu, .js-menu-screen').toggleClass('is-visible');
  e.preventDefault();
});

$('.js-menu .nav a:not(.js-about-menu-trigger)').on('click', function () {
  $('.js-menu, .js-menu-screen').toggleClass('is-visible');
});

var text;
$('.js-about-menu-trigger').attr('href', '').on('click touchstart', function (e) {
  text = $('i', this).text();
  $('i', this).text(text == '＋' ? '−' : '＋');
  $('.js-about-menu').slideToggle();
  e.preventDefault();
});

});
