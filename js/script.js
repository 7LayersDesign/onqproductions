/* Author: Andy Hutchins for Seven Layers Design
*/




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

// Start of Document Code
$(document).ready(function() {
    
    //scroll to functionality for nav
    $('.nav').onePageNav({
        currentClass: 'current',
        changeHash: true,
        scrollSpeed: 500
    });
    // End page scroll functionality
    //Call getVideoArray once for each Vimeo channel
    getVimeoChannelArray('comm', '183078');
    getVimeoChannelArray('wedding', '183077');
        
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
    $('a.special').click(function(){
        $('#photoList').isotope({ filter: '.special' });        
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
$(window).load(
    function() {
        //init Isotope after all images load
        $('#photoList').isotope({
          // options
          itemSelector : '.item',
          layoutMode : 'fitRows',
          animationEngine : 'jquery'
        });        
        
    }
);