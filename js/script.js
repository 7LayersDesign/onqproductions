/* Author: Andy Hutchins for Seven Layers Design
*/
$(document).ready(function() {
    //scroll to functionality for nav
    $('.nav').onePageNav({
        currentClass: 'current',
        changeHash: true,
        scrollSpeed: 500
    });
    // End page scroll functionality


    //Much of this code is modified from the jFlickrFeed plugin to pull photosets. Thanks!!
    // Build URL to query the Flickr API
    var settings = {
        flickrbase: 'http://api.flickr.com/services/rest/',
        qstrings: {
            method: 'flickr.photosets.getPhotos',
            format: 'json',
            api_key: '5a79f4d6b80c431cf05fa7a502a67077',
            photoset_id: '72157626084706053',
            extras: 'url_m, url_b, url_z, url_t',
            //We need the thumb, medium source	
            // per_page: '',
            jsoncallback: '?'
        }
    };
    //build out API request URL
    var url = settings.flickrbase + '?';
    var first = true;
    for (var key in settings.qstrings) {
        if (!first)
        url += '&';
        url += key + '=' + settings.qstrings[key];
        first = false;
    }
    /*
		TODO Add exception handling to getJSON() call.
	*/

    // Initialize vars
    var imgURL_full;
    var imgURL_thumb;
    var photoArr = [];
    var photoItem = [];
    
    // Perform JSON request
    $.getJSON(url, {},
    function(data) {                
        // if request succeded do stuff
        if (data.stat == 'ok'){
            //JSON Object retrieved. Build URL and push to photoArr on each item
            $.each(data.photoset.photo,
            function(i, item) {
                // clear photoItem
                photoItem = null;

                //build imgURL for full and thumb
                imgURL_thumb = 'http://farm' + item.farm + '.static.flickr.com/' +
                    item.server + '/' + item.id + '_' + item.secret + '_t.jpg';
                imgURL_full = 'http://farm' + item.farm + '.static.flickr.com/' +
                    item.server + '/' + item.id + '_' + item.secret + '_b.jpg';

                // Add photo data to item array
                photoItem = ['wedding', imgURL_thumb, imgURL_full];                
                //add photoItem to photoArr array
                photoArr.push(photoItem);                    
            });
            
            //print items to page
            if (photoArr.length > 0){
                console.log('Print Time');
                //append each photo to index as an li element
                $.each(photoArr, function(i){                    
                    console.log(photoArr[i][0] + ' :: ' + photoArr[i][1]);


                    $('.photoList').append('<li class="' + photoArr[i][0] + '"><img src="' +
                            photoArr[i][1] + '"></li>');
                    
                    
                    
                });
                
            };
        } else {
            console.log('An error has occured. See below for details.\n' +
                'Error Code: ' + data.code + '\n' +
                'Status: ' + data.stat + '\n' +
                'Message: ' + data.message);
        }
    });
    //end JSON action        
    
    

    
    
}); 

























