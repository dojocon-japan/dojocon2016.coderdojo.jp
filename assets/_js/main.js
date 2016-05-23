'use strict';

var jQuery = require('jquery');
var $ = jQuery;

$(function() {

$('.js-menu-trigger, .js-menu-screen, .js-menu-close').on('click touchstart', function (e) {
  $('.js-menu, .js-menu-screen').toggleClass('is-visible');
  e.preventDefault();
});

});
