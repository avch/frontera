'use strict';

$.extend(true,$.fancybox.defaults,{helpers:{overlay:{locked:false}},tpl:{closeBtn:'<a class="fancybox-item fancybox-close"></a>',next:'<a class="fancybox-nav fancybox-next"><span></span></a>',prev:'<a class="fancybox-nav fancybox-prev"><span></span></a>'}});

$(document).ready(function(){

	initLayout();

	initUtilities();
});

function initLayout() {
	var $window = $(window),
		$header = $('.header'),
		$footer = $('.footer'),
		$content = $('.content');

	$window.on('resize', function() {
		$content.css('min-height', $window.outerHeight() - $header.outerHeight() - $footer.outerHeight());
	}).trigger('resize');
}

function initUtilities() {

	$('.fancybox').fancybox();

	$('.slick').slick();

	$('.format a[href^=#], a.scrollto[href^=#]').each(function() {
		var $target = $(this.hash);

		$(this).on('click', function() {
			if($target.length > 0) {
				$('html, body').animate({ scrollTop: $target.offset().top }, 'slow');
			}
			return false;
	    });
	});

	$('a[href=#no-click]').on('click', function() { return false; });
}