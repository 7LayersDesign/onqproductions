/* Author: Andy Hutchins for Seven Layers Design
*/

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
    //getVimeoChannelArray('wedding', '183077');
        
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
        $('#videoList').isotope({
          // options
          itemSelector : '.item',
          layoutMode : 'fitRows',
          animationEngine : 'jquery'
        });        
    }
);