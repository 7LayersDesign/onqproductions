/* Author: Andy Hutchins for Seven Layers Design


*/
$(document).ready(function() {
	// Build URL to query the Flickr API
	var settings = {
		flickrbase: 'http://api.flickr.com/services/rest/',					
		qstrings: {
			method: 'flickr.photosets.getPhotos',
			format: 'json',
			api_key: '99fa1a4466f8f97f78b545eaa0a22f28',
			photoset_id: '72157626085959775',
			extras: 'url_sq, url_m',	//We need the square thumb, medium source	
			per_page: '9',
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
	//URL complete	
	console.log(url);

	$.getJSON(url, function(data) {
		console.log(data.photoset);
		//JSON Object retrieved. Let the fun begin!
		$.each(data.photoset.photo, function(i, item){
			//do something with each photo
			$('.photoList').append('<li class="wedding"><a href="' + item.url_m + 
			'"><img src="' + item.url_sq + '" width="75" height="75"></a></li>');
			
						
		})

	});
	
});
























