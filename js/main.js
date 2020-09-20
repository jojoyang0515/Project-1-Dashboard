//plugin from https://www.jqueryscript.net/animation/news-ticker-controls-acme.html
jQuery(document).ready(function ($) {
        $('.my-news-ticker-3').AcmeTicker({
            type:'typewriter',
            direction: 'right',
            speed:50,
            controls: {
                prev: $('.acme-news-ticker-prev'),
                next: $('.acme-news-ticker-next')
            }
        });
})

var tooltipBuilder = ""

tooltipBuilder += '<div>'+
	'<h6>Twitter</h6>'+
	'<div class="row hovertooltip">'+
		'<div class="col-lg-5 percentage">'+
			'31%'+
		'</div>'+
		'<div class="col-lg-7">'+
			'<ul class="tooltiplist">'+
				'<li class="tooltipdata">27 Followers</li>'+
				'<li class="tooltipdata">15 Retweets</li>'+
				'<li class="tooltipdata">4 Favorites</li>'+
			'</ul>'+
		'</div>'+
		'</div>'+
	'</div>'

//plugin from https://stephanwagner.me/jBox
new jBox('Tooltip', {
	attach: '.pchart',
	content: (tooltipBuilder),
	position: {
    y: 'bottom'
  },
});