(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 48)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });
  
  // Activate scrollspy to add active class to navbar items on scroll
  /*$('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });*/

  $('#formpick').click(function(){
    $('#formfile').click();
  });
  $('#formfile').change(function(){
    var file = this.files[0];
    var imagefile = file.type;
    var match = ['image/jpeg', 'image/png', 'image/jpg'];
    if(!(imagefile==match[0]||imagefile==match[1]||imagefile==match[2])){
    	$('#previewimage').attr('src', 'img/shiyuan-s.png');
    	$('#message').html("<p class='error'>Please Select A valid Image File</p>"+"<p class='error_message'>Only jpeg, jpg and png Images type allowed</p>");
        return false;
    } else {
    	var reader = new FileReader();
    	reader.onload = function(e){
    		$('#previewimg').attr('src', e.target.result);
    	};
    	reader.readAsDataURL(this.files[0]);
    }
  });
  $('#uploadimage').on('submit', (function(e){
    if(!$('#formfile').val()){
      $('#message').html("<p class='error'>Please Select A Photo.</p>");
      return false;
    };
  	e.preventDefault();
  	$.ajax({
  		url: 'upload',
  		type: 'POST',
  		data: new FormData(this),
  		contentType: false,
  		cache: false,
  		processData: false,
  		success: function(data){
  			alert(data);
  		}
  	});
  	/*
  	$.post('upload', new FormData(this), function(data){

  	});
  	*/
  }));
  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

})(jQuery); // End of use strict
