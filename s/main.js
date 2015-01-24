'use strict';

$.extend(true, $.fancybox.defaults, { 'helpers': { 'overlay': { 'locked': false } }, 'tpl': { 'closeBtn': '<a class="fancybox-item fancybox-close"></a>', 'next': '<a class="fancybox-nav fancybox-next"><span></span></a>', 'prev': '<a class="fancybox-nav fancybox-prev"><span></span></a>' } });

$(document).ready(function(){

	initUtilities();

});

function initUtilities() {

	$('.fancybox').fancybox();

	$('.slick').slick();

	$('.format a[href^=#], a.scrollto[href^=#]').on('click', function() {
		$('html, body').animate({ 'scrollTop': $(this.hash).offset().top }, 'slow');
		return false;
    });
}