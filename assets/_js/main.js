'use strict';

global.jQuery = require('jquery');
global.$ = jQuery;
var scrollsmoothly = require('./scrollsmoothly.js');
var fancybox = require('./jquery.fancybox.js');
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

var icon;
$('.js-child-menu-trigger').attr('href', '').on('click', function (e) {
  icon = $(this).attr('data-icon');
  $(this).attr('data-icon', icon == '＋' ? '−' : '＋');
  $(this).siblings('.js-child-menu').slideToggle('fast');
  e.preventDefault();
});

var timer = false;
$(window).on('load scroll', function() {
  if (timer) clearTimeout(timer);
  timer = setTimeout(function() {
    if ($(window).scrollTop() > 70) {
      $('.js-menu').addClass('scrolled');
    } else {
      $('.js-menu').removeClass('scrolled');
    }
  }, 100);
});

$('.js-photos > li > a')
  .attr('rel', 'photo-gallery')
  .fancybox({
    padding: 0,
    helpers: {
      overlay: {
        css: {
          'background' : 'rgba(0, 0, 0, .7)',
        }
      }
    }
  });

}); // end $(function(){});

google.maps.event.addDomListener(window, 'load', function(){
  var latlng = new google.maps.LatLng(34.6794953, 135.513265);
  var options = {
    zoom: 16,
    center: latlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    scrollwheel: false,
    // draggable: false,
  };
  var map = new google.maps.Map(document.getElementById('map'), options);
  var marker = new google.maps.Marker({
    position: latlng,
    map: map
  });
});
