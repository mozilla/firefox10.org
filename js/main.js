(function() {
	window.addEventListener('localized', function() {
        var videoUrl = 'https://www.youtube.com/watch?v=j6pwTk4D8WI',
        shareDescr = document.webL10n.get('share-description'),
        encodedDescr = shareDescr.replace(/#/g, '%23'),
        sharer = new Share('.share-btn',{
          	width: '110px',
        	title: document.webL10n.get('share-title'),
        	url: videoUrl,
        	description: shareDescr,
        	ui: {
        	    button_text: document.webL10n.get('share'),
        	},
        	networks: {
        	    twitter: {
        	        description: encodedDescr
        	    },
        	    facebook: {
        	        description: encodedDescr
        	    },
        	    email: {
        	        description: shareDescr + videoUrl
        	    },
        	    pinterest: {
        	        enabled: false
        	    },
        	    google_plus: {
        	        enabled: false
        	    }
        	}
        });
      }, false);
}());