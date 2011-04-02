/* Author: Andy Hutchins for Seven Layers Design
*/


// GLOBAL ARRAYS



//Function Definitions for Flickr and Vimeo API interaction
var getFlickrSetArray = function(setID, limit) { 
    var photoArr = new Array();
    var photoItem = new Array();
    var flickrPhotoArr = new Array();                   
    //Much of this code is modified from the jFlickrFeed plugin to pull photosets. Thanks!!
    settings = {
        flickrbase: 'http://api.flickr.com/services/rest/',
        qstrings: {
            method: 'flickr.photosets.getPhotos',
            format: 'json',
            api_key: '5a79f4d6b80c431cf05fa7a502a67077',
            photoset_id: setID,
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
    };        
    
    
    //make JSON call using each set
    $.getJSON(requestURL, {},
        function(data) {  //callback function do asynch stuff in here
        // if request succeded do stuff        
        if (data.stat == 'ok'){ 
            $.each(item = data.photoset.photo , function(i){
                
            });
        } else {
            console.log('An error has occured. See below for details.\n' +
                'Error Code: ' + data.code + '\n' +
                'Status: ' + data.stat + '\n' +
                'Message: ' + data.message);
        };//end of data check
    });//end of getJSON callback function
};//end of getFlickrSetAraay()

var getVimeoChannelArray = function(videoClass, videoChannel) {
    var requestURL = '';
    var requestParams = {
        vimeoBase: "http://vimeo.com/api/v2/channel/",
        channel: videoChannel, 
        request: "videos",
        format: "json"
    };    
    var videoArray = [];
    var videoItem = [];
    //build the request URL
    requestURL += requestParams.vimeoBase +                    
                    requestParams.channel + '/' +
                    requestParams.request + '.' +
                    requestParams.format + '?callback=?';
                    
    //perform JSON request
    $.getJSON(requestURL, {format: 'json'}, function(data){
        //process each returned video object
        $.each(data, function(i){
            videoItem = [videoClass, data[i].url, data[i].thumbnail_medium];
            videoArray.push(videoItem); //push item to video collection array            
        });
        //append each video to UL as a LI
        $.each(videoArray, function(i){            
            $('#videoList').append('<li class="' + videoArray[i][0] + '"><a href="' +
                    videoArray[i][1] + '" rel="prettyPhoto"><img src="' +
                        videoArray[i][2] + '"></a></li>');            
        });
    });    
};

var setIsotope = function(){
    console.log('Set Isotope called!');
    $('#photoList').isotope({
      // options
      itemSelector : '.item',
      layoutMode : 'fitRows',
      animationEngine : 'jquery'
    });
}


// Start of Document Code
$(document).ready(function() {
    var photoArr = new Array();
    var photoItem = new Array();
    var flickrPhotoArr = new Array();     
    
    //scroll to functionality for nav
    $('.nav').onePageNav({
        currentClass: 'current',
        changeHash: true,
        scrollSpeed: 500
    });
    // End page scroll functionality

    //create an 2d array with each photoset
    getFlickrSetArray('72157626084706053', 5);
    
    //getFlickrSetArray(['wedding', '72157625718429177', 6]);
    //getFlickrSetArray(['architecture', '72157625513254874', 7]);        
    //setTimeout(setIsotope, 1000);

    //Call getVideoArray once for each Vimeo channel
    //getVimeoChannelArray('comm', '183078');
    //getVimeoChannelArray('wedding', '183077');
    
    /*
        TODO Find a better way to do this!
    */
    //setTimeout('setIsotope()', 2000);        
   
    //attach click events for sort options
    $('a.all').click(function(){
        $('#photoList').isotope({ filter: '*' });        
       return false;
    });
    $('a.wedding').click(function(){
        $('#photoList').isotope({ filter: '.wedding' });
       return false;
    });
    $('a.commercial').click(function(){
        $('#photoList').isotope({ filter: '.commercial' });        
       return false;
    });
    $('a.architecture').click(function(){
        $('#photoList').isotope({ filter: '.architecture' });        
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
