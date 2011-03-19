/* Author: Andy Hutchins for Seven Layers Design


*/
$(document).ready(function() {
	//scroll to functionality for nav
	// $.localScroll();
	







	//hide the displayimage innitially
	$('.displayImage').hide();
	
	
	// Build URL to query the Flickr API
	var settings = {
		flickrbase: 'http://api.flickr.com/services/rest/',					
		qstrings: {
			method: 'flickr.photosets.getPhotos',
			format: 'json',
			api_key: '99fa1a4466f8f97f78b545eaa0a22f28',
			photoset_id: '72157626085959775',
			extras: 'url_sq, url_m',	//We need the square thumb, medium source	
			per_page: '18',
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
	
	//URL complete. getJSON
	$.getJSON(url, function(data) {
		console.log(data.photoset);
		//JSON Object retrieved. Let the fun begin!
		$.each(data.photoset.photo, function(i, item){
			//do something with each photo
			$('.photoList').append('<li class="wedding thumb"><a href="' + item.url_m + 
			'"><img src="' + item.url_sq + '" width="75" height="75"></a></li>');		
		});
		
		//set display to first image
		//get and store the img src url 
		var imgSrc = data.photoset.photo[0].url_m;
		//set the display image src
		$('.displayImage').attr('src', imgSrc).fadeIn(1000);
				
	});//end JSON action

	//attach to click event of thumbnail images.
	$('ul.photoList a').live("click", function(e) {
		//get and store the img src url 
		var imgSrc = $(this).attr('href');
		
		//fadeout image
		$('.displayImage').fadeOut(500, function() {
			//change img src
			$(this).attr('src', imgSrc);
		}).delay(500).fadeIn(500);//.delay to allow for any loading
				
		//prevent link action
		return false;		
	});//end of click event
	
});
























