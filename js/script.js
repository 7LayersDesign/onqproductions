/* Author: Andy Hutchins for Seven Layers Design
*/

//Function Definitions
var getPhotoArray = function(photoClass, photoSet, limit) {
    //Much of this code is modified from the jFlickrFeed plugin to pull photosets. Thanks!!
    // Build URL to query the Flickr API
    var settings = {
        flickrbase: 'http://api.flickr.com/services/rest/',
        qstrings: {
            method: 'flickr.photosets.getPhotos',
            format: 'json',
            api_key: '5a79f4d6b80c431cf05fa7a502a67077',
            photoset_id: photoSet,
            per_page: limit,
            jsoncallback: '?'
        }
    };
    //build out API request URL
    var requestURL = settings.flickrbase + '?';
    var first = true;
    for (var key in settings.qstrings) {
        if (!first)
            requestURL += '&';
        requestURL += key + '=' + settings.qstrings[key];
        first = false;
    }    

    // Initialize vars
    var imgURL_full;
    var imgURL_thumb;
    var photoItem = [];
    var photoArr = [];    
    // Perform JSON request
    /*
        TODO Refactor into a function to use with multiple flickr photosets easily
    */
    $.getJSON(requestURL, {},
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
                photoItem = [photoClass, imgURL_thumb, imgURL_full];                
                //add photoItem to photoArr array
                photoArr.push(photoItem);            
            });                                    
            //print items to page
            if (photoArr.length > 0){
                //append each photo to index as an li element
                $.each(photoArr, function(i){                    
                    $('#photoList').append('<li class="' + photoArr[i][0] + '" data-type="' + photoArr[i][0] + '"><a href="' +
                        photoArr[i][2] + '" rel="shadowbox" class="thumb"><img src="' +
                            photoArr[i][1] + '"></a></li>');
                });                
            };
        } else {
            console.log('An error has occured. See below for details.\n' +
                'Error Code: ' + data.code + '\n' +
                'Status: ' + data.stat + '\n' +
                'Message: ' + data.message);
        };
    });
};

// Start of Document Code
$(document).ready(function() {
    //scroll to functionality for nav
    $('.nav').onePageNav({
        currentClass: 'current',
        changeHash: true,
        scrollSpeed: 500
    });
    // End page scroll functionality

    // Call getPhotoArray once for each category of photoset
    getPhotoArray('commercial', '72157625718688007', 12);
    getPhotoArray('wedding', '72157625718429177', 12);

    //attach click events
    $('a.all').click(function(){
       $('#photoList li').show();
       return false;
    });
    $('a.wedding').click(function(){
       $('#photoList li').show();        
       $('li.commercial').hide();
       return false;
    });
    $('a.commercial').click(function(){
       $('#photoList li').show();        
       $('li.wedding').hide();
       return false;
    });
   
   
   
    //initialize shadowbox
    Shadowbox.init({
        // skip the automatic setup again, we do this later manually
        skipSetup: true
    });
    window.onload = function() {
        // set up all anchor elements with a "movie" class to work with Shadowbox
        Shadowbox.setup("a.thumb", {
            gallery:        "My Photos",
        });
    };     
});

























