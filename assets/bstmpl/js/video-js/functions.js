jQuery(document).ready(function($) {
	(function() {
		
		var jqElemsVideoJS = $(".video-js");
		
		if (jqElemsVideoJS.length === 0) {
			return;
		}
		
		jqElemsVideoJS.each(function() {
			videojs($(this)[0], {
				controls: true,
				autoplay: true,
				preload: 'auto',
				playbackRates: [1, 1.5, 2],
				fluid: true,
//				controlBar: {
//			        volumePanel: {inline: false}
//			    },
				"inactivityTimeout": 700
			});
		});
	})();
});