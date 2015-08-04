'use strict';

$.extend(true,$.fancybox.defaults,{helpers:{overlay:{locked:false}},tpl:{closeBtn:'<a class="fancybox-item fancybox-close"></a>',next:'<a class="fancybox-nav fancybox-next"><span></span></a>',prev:'<a class="fancybox-nav fancybox-prev"><span></span></a>'}});

$(document).ready(function(){

	initLayout();

	initUtilities();
});

function initLayout() {
	var $window = $(window),
		$content = $('.content');

	$window.on('resize', function() {
		var h = 0;

		$content.siblings().each(function() { h += $(this).outerHeight(); });

		$content.css('min-height', $window.height() - h);

	}).trigger('resize');

	if(navigator.platform.indexOf('iPad') != -1) {
		document.querySelector('meta[name=viewport]').setAttribute('content', 'width=1200');
	}
}

function initUtilities() {

	$('.fancybox').fancybox();

	$('.slick').slick();

	$('input[type=tel]').mask('+7 (000) 000-00-00');

	$('.format a[href^=#]:not(.fancybox), a.scrollto[href^=#]').each(function() {
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