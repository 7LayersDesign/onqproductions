<!doctype html>  

<!-- paulirish.com/2008/conditional-stylesheets-vs-css-hacks-answer-neither/ --> 
<!--[if lt IE 7 ]> <html lang="en" class="no-js ie6"> <![endif]-->
<!--[if IE 7 ]>    <html lang="en" class="no-js ie7"> <![endif]-->
<!--[if IE 8 ]>    <html lang="en" class="no-js ie8"> <![endif]-->
<!--[if IE 9 ]>    <html lang="en" class="no-js ie9"> <![endif]-->
<!--[if (gt IE 9)|!(IE)]><!--> <html lang="en" class="no-js"> <!--<![endif]-->
<head>
  <meta charset="utf-8">

  <!-- Always force latest IE rendering engine (even in intranet) & Chrome Frame 
       Remove this if you use the .htaccess -->
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

	<!--
		TODO Enter page meta data. Change title based on page scroll posistion?
	-->
  <title></title>
  <meta name="description" content="">
  <meta name="author" content="">

  <!--  Mobile viewport optimized: j.mp/bplateviewport -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- Place favicon.ico & apple-touch-icon.png in the root of your domain and delete these references -->
	<!--
		TODO Create favicon and appletouchicon
	-->
  <!-- <link rel="shortcut icon" href="/favicon.ico">
  <link rel="apple-touch-icon" href="/apple-touch-icon.png"> -->

  <!-- CSS : implied media="all" -->
  <link rel="stylesheet" href="css/style.css?v=2">
  <link rel="stylesheet" type="text/css" href="css/shadowbox.css">
  <link rel="stylesheet" type="text/css" href="css/prettyPhoto.css">

  <!-- Uncomment if you are specifically targeting less enabled mobile browsers
  <link rel="stylesheet" media="handheld" href="css/handheld.css?v=2">  -->
 
  <!-- All JavaScript at the bottom, except for Modernizr which enables HTML5 elements & feature detects -->
  <script src="js/libs/modernizr-1.6.min.js"></script>

	<!-- Typekit Embed Code -->
	<script type="text/javascript" src="http://use.typekit.com/ftw1yvk.js"></script>
	<script type="text/javascript">try{Typekit.load();}catch(e){}</script>

	<!-- prettyPhoto -->
	<!-- <script src="js/plugins/jquery.prettyPhoto.js"></script>  -->
	
</head>

<body> 	   	
<div id="headerWrap">
	<div class="inner">
		<h1 class="ir logo">OnQ Productions</h1>
		<ul class="nav">
			<li><a class="welcome" href="#welcomeSection" title="Welcome">Welcome</a></li>
			<li><a class="photo" href="#photoSection" title="Photography">Photography</a></li>
			<li><a class="video" href="#videoSection" title="Videography">Videography</a></li>
			<li><a class="service" href="#servicesSection" title="Services">Services</a></li>
			<li><a class="contact" href="#contactSection" title="Contact">Contact</a></li>
		</ul>
	</div>
</div><!-- End of .header -->   

<!-- Page Wrap Container Start -->
<div class="container">
	<!--
		TODO Tweak the dimensions of the sections. Respond to diff sreen sizes?
	-->
	<!-- Welcome Section -->
	<div id="welcomeSection" class="section">
		<div class="inner">
			<h2>Welcome</h2>		
			<!--
				TODO Design and develop the landing page!!!
			-->
		</div>
    </div>
	<!-- Photo Section -->
    <div id="photoSection" class="section">
		<div class="inner">
			<h2>Photography</h2>
			<p>We can provide a wide range of photographic services ranging from commercial 
				shoots to weddings. Contact us for more info. We can provide a wide range of photographic services ranging from commercial 
					shoots to wedding. Contact us for more info. Take some time  to checkout our photo samples below!</p>
			<div class="sortOptions">
				<span>Sort Options:</span>
				<a class="all" href="#">All</a>
				<a class="wedding" href="#">Wedding</a>
				<a class="commercial" href="#">Commercial</a>
				<a class="architecture" href="#">Architecture</a>				
			</div>
			<div id="photoList">				
				<!-- List of image thumbs will go here -->
			</div>					
		</div>
    </div>
	<!-- Video Section -->
    <div id="videoSection" class="section">
		<div class="inner">
			<h2>Videography</h2>
			<p>We can provide a wide range of video services ranging from commercial 
				shoots to weddings. Contact us for more info. We can provide a wide range of video services ranging from commercial 
					shoots to wedding. Contact us for more info. Take some time  to checkout our video samples below!</p>
			<div class="sortOptions">
				<span>Sort Options:</span>
				<a class="all" href="#">All</a>
				<a class="wedding" href="#">Wedding</a>
				<a class="commercial" href="#">Commercial</a>
			</div>					
			<ul id="videoList">
				<!-- List of video thumbnails will go here -->
			</ul>
		</div>
	</div>
	<!-- Service Section -->
    <div id="servicesSection" class="section">
		<div class="inner">
			<h2>Services</h2>
			<h3>Video</h3>
			<p>There's a most doleful and most mocking funeral! The sea-vultures all in pious mourning, the air-sharks all punctiliously in black or speckled. In life but few of them would have helped the whale, I ween, if peradventure he had needed it; but upon the banquet of his funeral they most</p>
			<h3>Photos</h3>
			<p>There's a most doleful and most mocking funeral! The sea-vultures all in pious mourning, the air-sharks all punctiliously in black or speckled. In life but few of them would have helped the whale, I ween, if peradventure he had needed it; but upon the banquet of his funeral they most</p>
		</div>
    </div>
	<!-- Contact Section -->
    <div id="contactSection" class="section">
		<div class="inner">
			<h2>Contact</h2>
			<!--
				TODO Develop contact page. Contact form and info. Wufoo??
			-->			
		</div>
    </div>	
</div> <!--! end of .container -->


<!--////////////// All Javascript at the bottom for fast page loading \\\\\\\\\\\\\\\\\\\\\-->
<!-- Grab Google CDN's jQuery. fall back to local if necessary -->
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.5.1/jquery.js"></script>
<script>!window.jQuery && document.write(unescape('%3Cscript src="js/libs/jquery-1.5.1.min.js"%3E%3C/script%3E'))</script>

<!-- jQuery Plugins and Scripts -->
<script src="js/script.js"></script>
<script src="js/plugins/jquery.nav.min.js"></script>
<script src="js/plugins/jquery.scrollTo.js"></script>
<script src="js/plugins/shadowbox.js"></script>
<script src="js/plugins/jquery.isotope.min.js"></script>


<!-- Use ddbelatedpng to fix png transparency in ie7 and below -->
<!--
TODO Add png fix class to all elements that need it
-->
<!--[if lt IE 7 ]>
  <script src="js/libs/dd_belatedpng.js"></script>
  <script> DD_belatedPNG.fix('img, .png_bg'); //fix any <img> or .png_bg background-images </script>
<![endif]-->


<!-- asynchronous google analytics: mathiasbynens.be/notes/async-analytics-snippet 
     change the UA-XXXXX-X to be your site's ID -->
<!--
TODO Setup analytics for OnQ Productions
-->
<!-- <script>
 var _gaq = [['_setAccount', 'UA-XXXXX-X'], ['_trackPageview']];
 (function(d, t) {
  var g = d.createElement(t),
      s = d.getElementsByTagName(t)[0];
  g.async = true;
  g.src = ('https:' == location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
  s.parentNode.insertBefore(g, s);
 })(document, 'script');
</script> -->

<!-- Initialize prettyPhoto -->
<!-- <script type="text/javascript" charset="utf-8">
		$(document).ready(function(){
			$("a[rel^='prettyPhoto']").prettyPhoto();
		});
</script> -->
</body>
</html>