/* Author: Andy Hutchins for Seven Layers Design


*/
$(document).ready(function() {
	//scroll to functionality for nav
	// $.localScroll();
	
	
	function preload(arrayOfImages) {
	    $(arrayOfImages).each(function(){
	        $('<img/>')[0].src = this;
	    });
	}	

	//hide the displayimage innitially
	$('.displayImage').hide();
	
	
	// Build URL to query the Flickr API
	var settings = {
		flickrbase: 'http://api.flickr.com/services/rest/',					
		qstrings: {
			method: 'flickr.photosets.getPhotos',
			format: 'json',
			api_key: '5a79f4d6b80c431cf05fa7a502a67077',
			photoset_id: '72157626084706053',
			extras: 'url_m, url_t, url_z',	//We need the thumb, medium source	
			per_page: '7',
			jsoncallback: '?'
			}			
		};

	var url = settings.flickrbase + '?';
	var first = true;

	//build out API request URL
	for(var key in settings.qstrings){
		if(!first)
			url += '&';
		url += key + '=' + settings.qstrings[key];
		first = false;
	}	
	
	console.log(url);
	
	
	//URL complete. getJSON
	$.getJSON(url, function(data) {
		console.log(data.photoset);
		//JSON Object retrieved. Let the fun begin!
		$.each(data.photoset.photo, function(i, item){
			//do something with each photo
			$('.photoList').append('<li class="wedding thumb"><a href="' + item.url_z + 
			'"><img src="' + item.url_t + '" width="' + item.width_t + '" height="' + item.height_t + '"></a></li>');		
		});
		
		console.log(data);
		
		
		//set display to first image
		//get and store the img src url 
		var imgSrc = data.photoset.photo[0].url_z;
		//set the display image src
		$('.displayImage').attr('src', imgSrc).fadeIn(1000);
		
		

		// Preload images
		/*
			TODO Implement Image Preloading to fix flickr loading
		*/
		
		
				
	});//end JSON action



	//attach to click event of thumbnail images.
	$('ul.photoList a').live("click", function(e) {
		//get and store the img src url 
		var imgSrc = $(this).attr('href');
		
		//fadeout image
		$('.displayImage').fadeOut(500, function() {
			//change img src
			$(this).attr('src', imgSrc);
		}).delay(1000).fadeIn(500);//.delay to allow for any loading
				
		//prevent link action
		return false;		
	});//end of click event
	
});
























