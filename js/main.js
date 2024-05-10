(function ($) {
 "use strict";
 
/*----------------------------
 Data-Toggle Tooltip
------------------------------ */	

// $('[data-toggle="tooltip"]').tooltip();
 
 /*----------------------------
 wow js active
------------------------------ */
 new WOW().init();
 
/*----------------------------
 jQuery MeanMenu
------------------------------ */
	jQuery('nav#mobile-menu').meanmenu();

/*----------------------------
 jQuery MeanMenu
------------------------------ */
	// $('.dropdown-toggle').dropdown()

//---------------------------------------------
//Nivo slider
//---------------------------------------------
	$('#ensign-nivoslider').nivoSlider({
		autoplay: true,
		slices: 15,
		animSpeed: 500,
		pauseTime: 5000,
		directionNav: true,
		pauseOnHover: false,
	});
	 
 /*----------------------------
 Active-Hot-Deals
------------------------------ */  
  $(".active-hot-deals").owlCarousel({
      autoPlay: false, 
	  slideSpeed:2000,
	  pagination:true,
	  navigation:false,	  
      items : 1,
	  navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
	  itemsDesktop : [1169,1],
	  itemsTablet: [991,1],
	  itemsTabletSmall: [767,2],
	  itemsMobile : [479,1],
  });

/*----------------------------
 Active-Bestseller
------------------------------ */  


/*----------------------------
 Active-Sidebar-Banner
------------------------------ */  
  $(".active-sidebar-banner").owlCarousel({
      autoPlay: true, 
	  slideSpeed:2000,
	  pagination:false,
	  navigation:false,	  
      items : 1,
	  transitionStyle : "fade",
	  itemsDesktop : [1169,1],
	  itemsTablet: [991,1],
	  itemsTabletSmall: [767,1],
	  itemsMobile : [479,1],
  });

/*----------------------------
 Active-Recent-Posts
------------------------------ */  
  $(".active-recent-posts").owlCarousel({
      autoPlay: false, 
	  slideSpeed:2000,
	  pagination:true,
	  navigation:false,	  
      items : 1,
	  itemsDesktop : [1169,1],
	  itemsTablet: [991,1],
	  itemsTabletSmall: [767,1],
	  itemsMobile : [479,1],
  });

 /*----------------------------
 Active-Product-Carosel
------------------------------ */   

  

	$(".active-bestseller").owlCarousel({
		autoPlay: false, 
		slideSpeed: 2000,
		pagination: false,
		navigation: true,	  
		items: 1,
		navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
		itemsDesktop: [1169, 1],
		itemsTablet: [991, 1],
		itemsTabletSmall: [767, 1],
		itemsMobile: [479, 1],
	}); 
	
	
 /*----------------------------
 Active-Small-Product
------------------------------ */   
  $(".active-small-product").owlCarousel({
      autoPlay: false, 					
	  slideSpeed:2000,
	  pagination:false,
	  navigation:true,	  
      items : 3,
	  nav: true,
	  navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
	  responsive:{
		0:{
			items:1
		},
		767:{
			items:2
		},
		991:{
			items:2
		},
		1169:{
			items:2
		},
		1200:{
			items:3
		}
	}   
  });

 /*----------------------------
 Active-Brand-Logo
------------------------------ */   





 /*----------------------------
 Active-Hot-Deals-Style-2
------------------------------ */  
  $(".active-hot-deals-style-2").owlCarousel({
      autoPlay: false, 
	  slideSpeed:2000,
	  pagination:false,
	  navigation:false,	  
      items : 5,
	  margin: 20, 
	  responsive:{
		0:{
			items:1
		},
		767:{
			items:2
		},
		991:{
			items:3
		},
		1169:{
			items:4
		},
		1200:{
			items:5
		}
	}  
  });
 /*----------------------------
 Active-Product-Carosel-style-2
------------------------------ */   
  $(".active-product-carosel-style-2").owlCarousel({
      autoPlay: false, 
	  slideSpeed:2000,
	  pagination:false,
	  navigation:true,	  
      items : 5,
	  margin: 20,
	  nav:true,
	  navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
	  responsive:{
		0:{
			items:1
		},
		767:{
			items:2
		},
		991:{
			items:2
		},
		1169:{
			items:3
		},
		1200:{
			items:5
		}
	}  
  });

 /*----------------------------
 	Active-Recent-Posts-style-2
------------------------------  */  
  $(".active-recent-posts-style-2").owlCarousel({
      autoPlay: false, 
	  slideSpeed:2000,
	  pagination:false,
	  navigation:true,	  
      items : 4,
	  margin: 20,
	  nav:true,
	  navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
	  responsive:{
		0:{
			items:1
		},
		767:{
			items:2
		},
		991:{
			items:3
		},
		1200:{
			items:4
		}
	}  
  });


/*--------------------------
	Category Menu
---------------------------- */	
	 $('.rx-parent').on('click', function(){
		$('.rx-child').slideToggle();
		$(this).toggleClass('rx-change');
		
	});

	$(".embed-responsive iframe").addClass("embed-responsive-item");
	$(".carousel-inner .item:first-child").addClass("active");
	
/*--------------------------
	category left menu
---------------------------- */	
	 $('.category-heading').on('click', function(){
	 $('.category-menu-list').slideToggle(300);
	});	  


/*---------------------
 countdown
--------------------- */
	$('[data-countdown]').each(function() {
	  var $this = $(this), finalDate = $(this).data('countdown');
	  $this.countdown(finalDate, function(event) {
		$this.html(event.strftime('<span class="cdown days"><span class="time-count">%-D</span> <p>Days</p></span> <span class="cdown hour"><span class="time-count">%-H</span> <p>Hour</p></span> <span class="cdown minutes"><span class="time-count">%M</span> <p>Min</p></span> <span class="cdown second"> <span><span class="time-count">%S</span> <p>Sec</p></span>'));
	  });
	});	


/*---------------------
 price slider
--------------------- */  
	$(function() {
	  $( "#slider-range" ).slider({
	   range: true,
	   min: 40,
	   max: 600,
	   values: [ 60, 570 ],
	   slide: function( event, ui ) {
		$( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
	   }
	  });
	  $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
	   " - $" + $( "#slider-range" ).slider( "values", 1 ) );
	});	


/*--------------------------
 scrollUp
---------------------------- */	
	$.scrollUp({
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    }); 
/*--------------------------
 zoom
---------------------------- */	 
$('.toch-photo').zoom();





 
})(jQuery); 


function initCarrousel(target = ".active-product-carosel") {
	$(target).owlCarousel({
		autoPlay: false, 
		slideSpeed:2000,
		pagination:false,
		navigation:true,	  
		margin:20,
		nav:true,
		navigationText:["<i class='fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		responsive:{
			0:{
				items:1
			},
			767:{
				items:2
			},
			991:{
				items:2
			},
			1169:{
				items:3
			},
			1200:{
				items:4
			}
		}  
	});
}

initCarrousel()



function masvendido(target2=".active-bestseller")
{
	$(target2).owlCarousel({
		autoPlay: false, 
		slideSpeed:2000,
		pagination:false,
		navigation:true,	  
		items : 1,
		navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		itemsDesktop : [1169,1],
		itemsTablet: [991,1],
		itemsTabletSmall: [767,1],
		itemsMobile : [479,1],
	});
}

masvendido()
function MisMarcas(target=".active-brand-logo"){
	$(target).owlCarousel({
		autoPlay: false, 
		slideSpeed:2000,
		pagination:false,
		navigation:true,	  
		items : 6,
		nav: true,
		navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		responsive:{
		  0:{
			  items:2
		  },
		  767:{
			  items:3
		  },
		  991:{
			  items:4
		  },
		  1200:{
			  items:5
		  }
	  }  
	});
}
MisMarcas()