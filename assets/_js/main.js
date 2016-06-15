'use strict';

global.jQuery = require('jquery');
global.$ = jQuery;
var scrollsmoothly = require('./scrollsmoothly.js');
var fancybox = require('./jquery.fancybox.js');
var xlScreen = 1440;

$(function() {

/**
 * Global menu on mobiles and tablets
 */
$('.js-menu-trigger, .js-menu-screen, .js-menu-close').on('click touchstart', function (e) {
  $('.js-menu, .js-menu-screen').toggleClass('is-visible');
  e.preventDefault();
});

$('.js-menu .nav a:not(.js-child-menu-trigger)').on('click', function () {
  if ($(window).width() < xlScreen) {
    $('.js-menu, .js-menu-screen').toggleClass('is-visible');
  }
});

/**
 * Child menu in the global menu
 */
var icon;
$('.js-child-menu-trigger').attr('href', '').on('click', function (e) {
  icon = $(this).attr('data-icon');
  $(this).attr('data-icon', icon == '＋' ? '−' : '＋');
  $(this).siblings('.js-child-menu').slideToggle('fast');
  e.preventDefault();
});

/**
 * Global menu on desktops
 */
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

/**
 * Speaker profile modal window
 * @use Fancybox
 */
$('.js-speaker-profile-box').hide();
$('.js-speaker-profile-trigger')
  .each(function (index, el) {
    $(this)
      .attr('data-fancybox-href', $(this).attr('href'))
      .attr('href', '');
  })
  .attr('rel', 'speakers')
  .fancybox({
    maxWidth: 940,
    padding: 0,
    scrolling: 'visible'
  });

/**
 * Session detail modal window
 * @use Fancybox
 */
$('.js-session-detail-box').hide();
$('.js-session-detail-trigger')
  .each(function (index, el) {
    $(this)
      .attr('data-fancybox-href', $(this).attr('href'))
      .attr('href', '');
  })
  .attr('rel', 'sessions')
  .fancybox({
    maxWidth: 940,
    padding: 0,
    scrolling: 'visible'
  });

/**
 * Photo gallery modal window
 * @use Fancybox
 */
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

/**
 * Arduino Tank
 */
var timer2 = false;
var robotTop, robotH, winH, scrollTop;
$('.js-robot').addClass('start-position');
$(window).on('load scroll resize', function() {
  winH = $(window).height();
  robotH = $('.js-robot').height();
  robotTop = $('.js-robot').offset().top;
  scrollTop = $(window).scrollTop();

  if (timer2) clearTimeout(timer2);
  timer2 = setTimeout(function() {
    if (scrollTop > robotTop - winH + robotH) {
      $('.js-robot').removeClass('start-position');
      $('.js-pipi').addClass('flash');
    }
  }, 100);
});

/**
 * Exhibition auto height
 */
$(window).on('load resize', function() {
  var exhibitionH = 0;
  $('.js-exhibitions > li').css('height', 'auto');
  if ($(window).width() >= 768) {
    $('.js-exhibitions > li').each(function() {
      exhibitionH = exhibitionH < $(this).height() ? $(this).height() : exhibitionH;
    });
    $('.js-exhibitions > li').css('height', exhibitionH);
  }
});

}); // end $(function(){});

/**
 * Google Maps
 * @require Google Maps API
 */
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
