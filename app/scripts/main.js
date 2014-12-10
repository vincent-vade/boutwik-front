$(document).ready(function() {
    //infinite scroll
		$('#iso').infinitescroll({

        navSelector: 'div.pagination',
        nextSelector: 'div.pagination a:first',
        itemSelector: '.post',
        bufferPx: 50,
        loadingText: "Loading new posts...",

    });

		$("#slideshow").owlCarousel({

			items : 3,
			itemsDesktop : [1199,3],
			itemsDesktopSmall : [979,3],
			transitionStyle : "fade",
			navigation : true, // Show next and prev buttons
			navigationText : ["<i class='fa fa-arrow-left fa-2x'></i>","<i class='fa fa-arrow-right fa-2x'></i>"],
			autoPlay : true,
			lazyLoad: true,

		});

		$("img.img-load").unveil();


		//TOOLTIP
		$("[rel='tooltip']").tooltip();

		//HOVER PRODUCT
    /*$('#timeline .thumbnail').hover(
        function(){
            $(this).find('.caption').slideDown({
							duration: 300,
							easing: 'easeInOutQuad'
						}); //.fadeIn(250)
        },
        function(){
            $(this).find('.caption').slideUp({
							duration: 300,
							easing: 'easeInQuad'
						}); //.fadeOut(205)
        }
    );*/

		$(document).scroll(function () {
			var y = $(this).scrollTop();
			if (y > 100) {
				$('.brand-nav-alt').fadeIn();
			} else {
				$('.brand-nav-alt').fadeOut();
			}

		});


		$(document).scroll(function () {
			var x = $(this).scrollTop();
			if (x > 1000) {
				$('.follow').fadeIn();
			} else {
				$('.follow').fadeOut();
			}

		});


		/*$(document).scroll(function(){
			if($(this).scrollTop() > 200){
				$('.brand-nav').css({
					'position': 'fixed',
					'opacity': 1,
					'top' : 0
				});
			}else{
				$('.brand-nav').css({
					'position': 'static',
					'opacity': 1
				});
			}
		});*/

    //Scroll Down
    /*$(function() {
        $('a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });*/

		//MENU DROPDOWN
    $(".toggle").click(function() {
        $(".isToggle").slideToggle("slow");
    });


    //NAV SCROLL/*
    $(window).scroll(function() {
        if ($(".navbar").offset().top > 20) {
            $(".navbar-fixed-top").addClass("top-nav-collapse");
        } else {
            $(".navbar-fixed-top").removeClass("top-nav-collapse");
        }
    });


    //jQuery for page scrolling feature - requires jQuery Easing plugin
    $(function() {
        $('a.page-scroll').bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
    });

		var container = $('#timeline');

		container.infinitescroll({
			navSelector: '.pagination',
			nextSelector: '.next-page',
			itemSelector: '.it'
		},
		function(newElements) {
			salvattore['append_elements'](container, newElements);
		});

});
